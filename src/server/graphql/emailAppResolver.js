const { join } = require("path")
const fs = require("fs")
const util = require("util")
const EmailApp = require("../models/email_app")
const { ejs, readContent, getTranslation, t } = require("../../../functions")
const transporter = require("../../../send_mail")
const r = {}

r.emailApp = async ({ json }) => {
	json = JSON.parse(json)

	const emailType = json.emailType
	if (!emailType) return { error: "emailType is missing" }

	switch (emailType) {
		case "flight_request":
			const customerInformation = {
				emailType: json.emailType || "",
				email: json.email || "",
				order: json.order || "",
				firstName: json.firstName || "",
				lastName: json.lastName || "",
				lang: json.lang || "",
				clientId: json.clientId || ""
			}
			//error handling:
			let error = ""
			Object.entries(customerInformation).forEach(item => {
				if (item[1] === "") error += `${item[0]} field was empty. \n`
			})
			const queryOrder = await EmailApp.find({
				order: customerInformation.order,
				emailType: customerInformation.emailType
			})

			if (queryOrder.length) {
				error += `order:${customerInformation.order} has already been recieved`
				return {
					id: customerInformation.order,
					json: "",
					error: error
				}
			}
			const newCustomer = new EmailApp(customerInformation)
			const saveOrder = await newCustomer.save(customerInformation)
			// console.log("saveOrder", saveOrder)

			const sending = await sendFlightRequestEmail(customerInformation)

			return {
				id: customerInformation.order,
				json: JSON.stringify(json),
				error: error
			}
	}
}

function sendFlightRequestEmail(obj) {
	const nameFrom = "Sky-tours.com <support@sky-tours.com>"
	const emailTo = obj.email
	// ------------------------------------------------------Temporary personal email for testing:
	// const emailTo = "mehdi@sky-tours.com"
	const emailCc = ""
	const emailBcc = "tickets@sky-tours.com"
	const emailSubject = `Emergency Flight Request - Skytours - order #${obj.order}`
	const emailMessageTxt = ""

	Promise.all([readContent(join("src", "client", "emails", "flight_request.html"), "utf8")])
		.then(([template]) => {
			const emailMessageHtml = ejs(template)({
				...obj,
				// a safe way to access object properties for EJS, if does not exist, it will not throw an error
				reach: property => (obj[property] !== undefined ? obj[property] : null)
			})

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
			// fs.writeFileSync("./test.html", data.html)
			await transporter.sendMail(data).then(res => {
				console.log(`✔ Flight request sent to ${res.accepted.toString()}`)

				// set the emailSent field true in database
				EmailApp.updateOne({ order: obj.order, emailType: obj.emailType }, { emailSent: true })
					.then(res => res)
					.catch(err => console.error(`cannot update emailSent to true for order ${obj.order}`, err))
			})
		})

		.catch(err => console.error(`✘ Flight request failed for ${emailTo} , ${err}`))
}

module.exports = r