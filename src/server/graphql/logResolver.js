const { join } = require("path")
const fs = require("fs")
const util = require("util")
const { createStream } = require("../../../functions")
const r = {}

r.printConsole = async ({ mode = 50 }) => {
	const content = await createStream(join("data", "logs", "console.log"), "read")
	if (typeof Number(mode) !== "number") return { logs: [`wrong ${mode.toString()} parameter in the query`] }

	return { logs: content.split(/\n/g).slice(-1 * mode) }
}

r.printErrors = async ({ mode = 50 }) => {
	const content = await createStream(join("data", "logs", "err.log"), "read")

	if (typeof Number(mode) !== "number") return { logs: [`wrong ${mode.toString()} parameter in the query`] }

	return { logs: content.split(/\n/g).slice(-1 * mode) }
}

module.exports = r