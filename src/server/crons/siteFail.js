const fs = require("fs")
const { join } = require("path")
const SiteFail = require("../models/site_fail")
const { generateName, createStream } = require("../../../functions")
const sendMessage = require("../telegram/sendMessage")

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
	total = content.length
	// control = [...control, newLogs[0]]

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
	if(array404) sendMessage(id, msg)

	// console.log(newLogs)
	console.log("--", count404, Alarm404)

	// console.log(startIndex, total, control, failSample)
}

module.exports = failTest