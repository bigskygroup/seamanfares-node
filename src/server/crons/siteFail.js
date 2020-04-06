const fs = require("fs")
const { join } = require("path")
const SiteFail = require("../models/site_fail")
const { generateName, createStream } = require("../../../functions")
const sendMessage = require("../telegram/sendMessage")
const transporter = require("../../../send_mail")

async function failTest() {
	// name for the log file in use today
	const fileName = generateName(new Date().toISOString())

	var content
	try {
		content = await createStream(join("data", "logs", "morgan", fileName), "read")
	} catch (err) {
		console.error(err)
		return
	}
	// brings the logs in array, from 1st to last
	content = content.split(/\n/g).filter((item) => {
		if (item.length) return JSON.parse(item)
	})

	// query db for the log fileName:
	const entry = await SiteFail.findOne({ fileName: fileName })
		.then((res) => {
			if (res) return res
			else {
				//create the entry:
				const newLog = new SiteFail({ fileName: fileName })
				return newLog.save()
			}
		})
		.catch((err) => console.error(err))

	let { startIndex, total, control, failSample } = entry

	const newLogs = content.slice(startIndex)

	let count404 = 0

	let array404 = []
	newLogs.forEach((item) => {
		item = JSON.parse(item)
		if (item.url.match(/\/404/gi)) {
			count404++
			array404.push(JSON.stringify(item))
		}
	})

	// alarm for 404 errors if more than 10% of the incoming request is 404
	let Alarm404 = count404 / newLogs.length > 0.1 ? true : false

	if (Alarm404) {
		const percent = Math.round((count404 / newLogs.length) * 100)
		sendMessage(-429772334, alarmMessage(percent))
		alarmEmail(percent, newLogs)
	}

	total = content.length
	startIndex = content.length
	control = newLogs.length ? [...control, newLogs[0]] : control
	failSample = array404.length
		? [...failSample, array404[Math.floor(Math.random() * array404.length)]]
		: failSample

	SiteFail.updateOne(
		{ _id: entry._id },
		{ total: total, startIndex: startIndex, control: control, failSample: failSample }
	).catch((err) => console.error(err))
}

function alarmMessage(percent) {
	return `<b>!!! Too many 404 pages !!!</b>
	within last 20 minutes, <b>${percent}%</b> of incoming requests on sky-tours.com have been redirected to 404 page. This can mean a failure in the app.
	A complete log has been emailed to admins.`
}

function alarmEmail(percent, logs) {
	logs = JSON.stringify(logs, null, 2)

	const data = {
		from: "Sky-tours.com <support@sky-tours.com>",
		to: "mehdi@sky-tours.com, eliq@sky-tours.com, darko@sky-tours.com",
		subject: "Too many 404 pages",
		html: `Within last 20 minutes, <b>${percent}%</b> of incoming requests on sky-tours.com have been redirected to 404 page. This can mean a failure in the app.
	A complete log has been emailed to admins.`,
		attachments: [
			{ filename: `${new Date().toLocaleString().replace(/[\/,\s:]/g, "-")}.json`, content: logs },
		],
	}

	transporter
		.sendMail(data)
		.then((res) => {
			console.log(`✔ 404 report  sent to ${res.accepted.toString()}`)
		})
		.catch((err) => console.error(`✘ 404 report failed for ${data.to} , ${err}`))
}

module.exports = failTest