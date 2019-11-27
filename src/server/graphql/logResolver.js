const { join } = require("path")
const fs = require("fs")
const util = require("util")
const { createStream, readFolderFiles } = require("../../../functions")
const r = {}

r.printConsole = async ({ count = 50 }) => {
	const content = await createStream(join("data", "logs", "console.log"), "read")
	if (typeof Number(count) !== "number") return { logs: [`wrong ${count.toString()} parameter in the query`] }

	return { logs: content.split(/\n/g).slice(-1 * count) }
}

r.printErrors = async ({ count = 50 }) => {
	const content = await createStream(join("data", "logs", "err.log"), "read")

	if (typeof Number(count) !== "number") return { logs: [`wrong ${count.toString()} parameter in the query`] }

	return { logs: content.split(/\n/g).slice(-1 * count) }
}
r.printLogs = async ({
	count = 50,
	month = new Date().getMonth() + 1,
	day = new Date().getDate(),
	year = new Date().getFullYear()
}) => {

	const fileName = `${month}-${day}-${year}.log`
	const content = await createStream(join("data", "logs", "morgan", fileName), "read")

	if (typeof Number(count) !== "number")
		return { logs: [`wrong ${[...arguments].join()} parameter in the query`] }

	return { logs: content.split(/\n/g).slice(-1 * count) }
}
r.printLogsDates = async ({ count = 50 }) => {
	const result = await readFolderFiles(join("data", "logs", "morgan")).then(res => {
		res = res.length > count ? res.slice(-1 * count) : res
		return res.map(item => {
			const digits = item.match(/\d+/g)
			const obj = {
				month: digits[0],
				day: digits[1],
				year: digits[1]
			}
			return JSON.stringify(obj)
		})
	})
	return { logs: result }
}
module.exports = r