const { join } = require("path")
const fs = require("fs")
const { Readable } = require("stream")
const util = require("util")
const { createStream, readFolderFiles } = require("../../../functions")
const fetch = require("node-fetch")

const Flights_data = require("../models/flights_data")
const Flight_detail = require("../models/flight_detail")

const r = {}

r.timeOnServer = () => new Date().toString()

r.printConsole = async ({ count = 50 }) => {
	const content = await createStream(join("data", "logs", "console.log"), "read")
	if (typeof Number(count) !== "number") return { logs: [`wrong ${count.toString()} parameter in the query`] }

	return {
		logs: content
			.split(/\n/g)
			.slice(-1 * count)
			.reverse()
	}
}

r.printErrors = async ({ count = 50 }) => {
	const content = await createStream(join("data", "logs", "err.log"), "read")

	if (typeof Number(count) !== "number") return { logs: [`wrong ${count.toString()} parameter in the query`] }

	return {
		logs: content
			.split(/\n/g)
			.slice(-1 * count)
			.reverse()
	}
}

r.printLogsDates = async ({ count }) => {
	const result = await readFolderFiles(join("data", "logs", "morgan")).then(res => {
		res = res.filter(item => /^[\d-]+\.log$/.test(item))
		res = res.length > count ? res.slice(-1 * count) : res
		return res.map(item => {
			const digits = item.match(/\d+/g)
			const obj = {
				month: digits[0],
				day: digits[1],
				year: digits[2]
			}
			return JSON.stringify(obj)
		})
	})
	return { logs: result }
}

r.printLogs = async ({
	count = 50,
	month = new Date().getMonth() + 1,
	day = new Date().getDate(),
	year = new Date().getFullYear(),
	length = false
}) => {
	const fileName = `${month}-${day}-${year}.log`
	const content = await createStream(join("data", "logs", "morgan", fileName), "read")

	if (typeof Number(count) !== "number")
		return { logs: [`wrong ${[...arguments].join()} parameter in the query`] }
if(length) return { logs: [content.split(/\n/g).length.toString()] }

	return {
		logs: content
			.split(/\n/g)
			.reverse()
			.slice(-1 * count)
	}
}

r.captureResponse = ({ type, url }) => {
	if (typeof type !== "string" || typeof url !== "string" || !type.length || !url.length)
		return { error: "type and url must be string" }

	return fetch(url)
		.then(response => response.json())
		.then(async response => {
			log = JSON.stringify(response)
			switch (type) {
				case "flight_details":
					const newLog = new Flight_detail({ log: log })
					await newLog.save()
					return { error: "" }
				/*	
				case "flights_data":
					class Logger extends Readable {
						constructor(opt) {
							super(opt)
							this.log = log
						}
						_read() {
							console.log(log.length, "pushed")
							this.push(log)
						}
					}
					const read = new Logger()
					const write = createStream(join("test2"), "write")
					console.log(read)
					// read.pipe(write)

					return { error: "" }
*/
				default:
					return { error: "The type is not found in switch cases" }
			}

			
			return { error: "" }
		})
		.catch(err => console.log(err))
}

module.exports = r