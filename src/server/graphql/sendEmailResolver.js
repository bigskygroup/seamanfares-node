const { join } = require("path")
const fetch = require("node-fetch")
const fs = require("fs")
const util = require("util")
const Customer = require("../models/customer")
const { ejs, readContent, getTranslation, t } = require("../../../functions")
const transporter = require("../../../send_mail")
const r = {}

// const jsonTest = JSON.stringify(require("../../client/viewtrip"))

r.sendEmail = async ({ json }) => {
	// json = jsonTest
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
		total_paid,
		curr,
		clientId,
		reactLang,
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
		total_paid: String(total_paid) || "",
		curr: curr || "",
		lang: reactLang ? reactLang : "en",
		clientId: clientId || "",
	}

	//error handling:
	let error = ""
	Object.entries(customerInformation).forEach((item) => {
		if (item[1] === "") error += `${item[0]} field was empty. \n`
	})

	const queryOrder = await Customer.find({ order: order })
	//console.log("queryOrder", queryOrder)

	if (queryOrder.length) {
		error += `order:${order} has already been recieved`
		return {
			id: order,
			json: json,
			error: error,
		}
	}
	const newCustomer = new Customer(customerInformation)
	const saveOrder = await newCustomer.save(customerInformation)
	//console.log("saveOrder", saveOrder)

	const sending = await sendEmail(customerInformation)

	return {
		id: order,
		json: json,
		error: error,
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
	const emailSubject = `Your order #${obj.order}`
	const emailMessageTxt = ""
	const confirmationId = obj.order
	const lang = obj.lang
	// all fields are strings

	Promise.all([
		getTranslation(join("build", "locales", "lang", lang + ".json")),
		getTranslation(join("build", "locales", "lang", "en" + ".json")),
		readContent(join("src", "client", "confirmationEmail.html"), "utf8"),
	])
		.then(([titles, fallBack, template]) => {
			const flightsData = processFlight(JSON.parse(obj.data))
			const allData = { ...flightsData, ...obj }

			const emailMessageHtml = ejs(template)({
				...allData,
				t: (word) => t(word, titles, fallBack),
				// a safe way to access object properties for EJS, if does not exist, it will not throw an error
				reach: (property) => (allData[property] !== undefined ? allData[property] : null),
			})

			return {
				from: nameFrom,
				to: emailTo,
				cc: emailCc,
				bcc: emailBcc,
				subject: emailSubject,
				text: emailMessageTxt,
				html: emailMessageHtml,
			}
		})
		.then(async (data) => {
			// fs.writeFileSync("./test.html", data.html)
			await transporter.sendMail(data).then((res) => {
				console.log(`✔ confirmation email sent to ${res.accepted.toString()}`)

				// set the emailSent field true in database
				Customer.updateOne({ order: obj.order }, { emailSent: true })
					.then((res) => res)
					.catch((err) => console.error(`cannot update emailSent to true for order ${obj.order}`, err))
			})
		})

		.catch((err) => console.error(`✘ confirmation email fail to ${emailTo} , ${err}`))
}

function processFlight(obj) {
	obj.flights = obj.flights.map((item) => {

		console.log(">> item.baggage_info ", item.baggage_info)
		item.baggageInfo = `${
			item.baggage_info
				? item.lang_data.baggage_allowance +
				  ": " +
				  Object.entries(item.baggage_info.included).reduce(function(acc, curr) {
						if (curr[1]) {
							acc += curr[1] + ", "
						}
						return acc
				  }, "")
				: ""
		}`
console.log("** item.baggageInfo ", item.baggageInfo)
		item.cabinBaggageInfo = `${
			item.baggage_info.cabin.toLowerCase().trim() === "yes" &&
			item.baggage_info.hand.toLowerCase().trim() === "yes"
				? "Cabin bag included + Small hand bag"
				: ""
		}${
			item.baggage_info.cabin.toLowerCase().trim() === "yes" &&
			item.baggage_info.hand.toLowerCase().trim() !== "yes"
				? "Cabin bag included"
				: ""
		} ${
			item.baggage_info.cabin.toLowerCase().trim() !== "yes" &&
			item.baggage_info.hand.toLowerCase().trim() === "yes"
				? "Small hand bag included"
				: ""
		}`
		console.log("** item.cabinBaggageInfo ", item.cabinBaggageInfo)
		return item
	})

	return obj
}

module.exports = r