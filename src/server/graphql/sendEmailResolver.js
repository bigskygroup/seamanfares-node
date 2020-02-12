const { join } = require("path")
const fetch = require("node-fetch")
const fs = require("fs")
const util = require("util")
const Customer = require("../models/customer")
const { ejs, readContent, getTranslation, t } = require("../../../functions")
const transporter = require("../../../send_mail")
const r = {}

// const json = JSON.stringify(require("../../client/viewtrip"))

r.sendEmail = async ({ json }) => {

	// console.log(typeof json)
	// console.log(JSON.parse(json))
	//incoming customer information, from react, after ticket purchase, for sending email and storing in db:
	const {
		customer_email,
		customer_name,
		order,
		lname,
		gross_price,
		gross_curr,
		total_price,
		total_fare,
		curr,
		reactLang
	} = JSON.parse(json)
	const customerInformation = {
		data: json, // where all the information is stored as json
		customer_email: customer_email || "",
		customer_name: customer_name || "",
		order: order || "",
		lname: lname || "",
		gross_price: gross_price || "",
		gross_curr: gross_curr || "",
		total_fare: total_fare ? total_fare : total_price || "",
		curr: curr || "",
		lang: reactLang ? reactLang : "en"
	}

	//error handling:
	let error = ""
	Object.entries(customerInformation).forEach(item => {
		if (item[1] === "") error += `${item[0]} field was empty. \n`
	})

	const queryOrder = await Customer.find({ order: order })
	//console.log("queryOrder", queryOrder)
	if (queryOrder.length && queryOrder[0].emailSent) {
		error += `email already has been sent to order:${order} email:${customer_email}`
		return {
			id: order,
			json: json,
			error: error
		}
	}
	const newCustomer = new Customer(customerInformation)
	const saveOrder = await newCustomer.save(customerInformation)
	//console.log("saveOrder", saveOrder)

	const sending = await sendEmail(customerInformation)

	return {
		id: order,
		json: json,
		error: error
	}
}

async function sendEmail(obj) {
	//console.log("obj:" , obj)
	const nameFrom = "Sky-tours.com <support@sky-tours.com>"
	const emailTo = obj.customer_email
	// ------------------------------------------------------Temporary personal email for testing:
	// const emailTo = "mehdi@sky-tours.com"
	const emailCc = ""
	const emailBcc = "tickets@sky-tours.com"
	const emailSubject = `Confirmation for Order #${obj.order}`
	const emailMessageTxt = ""
	const confirmationId = obj.order
	const lang = obj.lang
	// all fields are strings


	Promise.all([
		getTranslation(join("build", "locales", "lang", lang + ".json")),
		getTranslation(join("build", "locales", "lang", "en" + ".json")),
		readContent(join("src", "client", "confirmationEmail.html"), "utf8")
	])
		.then(([titles, fallBack, data]) => {
			const emailMessageHtml = ejs(data)({ ...JSON.parse(obj.data), ...obj, t: word => t(word, titles, fallBack) })

			return {
				from: nameFrom,
				to: emailTo,
				cc: emailCc,
				bcc: emailBcc,
				subject: emailSubject,
				text: emailMessageTxt,
				html: emailMessageHtml
			}
		})
		.then(async data => { 
			//fs.writeFileSync("./test.html", data.html)
			await transporter.sendMail(data).then(res => { 
				console.log(`✔ confirmation email sent to ${res.accepted.toString()}`)

				// set the emailSent field true in database
				Customer.updateOne({ order: obj.order }, { emailSent: true })
					.then(res => res)
					.catch(err => console.error(`cannot update emailSent to true for order ${obj.order}`, err))
			})
		})

		.catch(err => console.error(`✘ confirmation email fail to ${emailTo} , ${err}`))
}

module.exports = r