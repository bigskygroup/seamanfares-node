const { join } = require("path")
const fs = require("fs")
const util = require("util")
const { createStream } = require("../../../functions")
const r = {}

r.printConsole = async ({ mode }) => {
	const content = await createStream(join("data", "logs", "console.log"), "read")

	if (!mode || mode === "normal") {
		return { logs: content.split(/\n/g) }
	} else return { logs: [`wrong ${mode.toString()} parameter in the query`] }
}

r.printErrors = async ({ mode }) => {
	const content = await createStream(join("data", "logs", "err.log"), "read")

	if (!mode || mode === "normal") {
		return { logs: content.split(/\n/g) }
	} else return { logs: [`wrong ${mode.toString()} parameter in the query`] }
}

module.exports = r