const { join } = require("path")
const fs = require("fs")
const util = require("util")
const { createStream, readFolderFiles } = require("../../../functions")
const r = {}

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
	year = new Date().getFullYear()
}) => {
	const fileName = `${month}-${day}-${year}.log`
	const content = await createStream(join("data", "logs", "morgan", fileName), "read")

	if (typeof Number(count) !== "number")
		return { logs: [`wrong ${[...arguments].join()} parameter in the query`] }

	return { logs: content.split(/\n/g).slice(-1 * count) }
}

r.timeOnServer = () => new Date().toString()

module.exports = r