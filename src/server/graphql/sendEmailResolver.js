const { join } = require("path")
const fetch = require("node-fetch")
const fs = require("fs")
const util = require("util")
const Customer = require("../models/customer")
const { ejs, readContent } = require("../../../functions")
const r = {}

// const json = require("../../client/viewtrip")

r.sendEmail = async ({ json }) => {
	// console.log(json)
	// console.log(JSON.parse(json))
	//incoming customer information, from react, after ticket purchase, for sending email and storing in db:
	const {
		customer_email,
		customer_name,
		order,
		lname,
		gross_price,
		gross_curr,
		total_fare,
		curr
	} = JSON.parse(json)
	const customerInformation = {
		data: json, // where all the information is stored as json
		customer_email: customer_email || "",
		customer_name: customer_name || "",
		order: order || "",
		lname: lname || "",
		gross_price: gross_price || "",
		gross_curr: gross_curr || "",
		total_fare: total_fare || "",
		curr: curr || ""
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
	// const emailTo = obj.customer_email
	// ------------------------------------------------------Temporary personal email for testing:
	const emailTo = "mehdi@sky-tours.com"
	const emailCc = ""
	const emailBcc = "tickets@sky-tours.com"
	const emailSubject = `Confirmation for Order #${obj.order}`
	const emailMessageTxt = ""
	const confirmationId = obj.order
	// all fields are strings

	const emailMessageHtml = await readContent(join("src", "client", "confirmationEmail.html"), "utf8").then(
		data => {
			const emailContent = ejs(data)(JSON.parse(obj.data))
			return emailContent
		}
	)

	// console.log(emailMessageHtml)

	const data = {
		nameFrom: nameFrom,
		emailTo: emailTo,
		emailCc: emailCc,
		// emailBcc: emailBcc,              //--------------------------off for testing
		emailSubject: emailSubject,
		emailMessageTxt: emailMessageTxt,
		emailMessageHtml: emailMessageHtml,
		emailConfirmId: obj.order
	}

	// console.log("email request recieved" , data)

	await fetch("https://email.hotelshop.com/sendemail", {
		method: "post",
		body: JSON.stringify(data),
		headers: { "Content-Type": "application/json" }
	})
		.then(res => {
			if (res.status == 200) {
				console.log(`✔ confirmation email sent to ${emailTo} at ${new Date().toLocaleString()}`)

				// set the emailSent field true in database
				Customer.updateOne({ order: obj.order }, { emailSent: true })
					.then(res => res)
					.catch(err => console.error(err, `cannot update emailSent to true for order ${obj.order}`))
			} else {
				console.error(`✘ confirmation email fail to ${emailTo} at ${new Date().toLocaleString()}`)
			}
		})
		.catch(err => console.error("✘ err was: ", err, new Date().toLocaleString()))
}

module.exports = r