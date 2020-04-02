const TelegramBot = require("node-telegram-bot-api")
const { printConsole, printErrors, printLogs } = require("../graphql/logResolver")
const { prettifyArray, prettifyJSON } = require("../../../functions")

const token = "932179659:AAECwJlr21x_O_8iBWcr90-ksTN_3T0BMxI"
const botName = "sky_8d4h_bot"
const bot = new TelegramBot(token, { polling: true })

const admins = [121560955]

bot.on("message", async msg => {
	if (!admins.includes(msg.chat.id)) return

	switch (msg.text.toLowerCase().trim()) {
		case "ping":
			return bot.sendMessage(msg.chat.id, "pong")

		case "console":
			let consoleLog = await printConsole({ count: 10 })
			consoleLog = prettifyArray(consoleLog.logs)
			return bot.sendMessage(msg.chat.id, consoleLog, { parse_mode: "HTML" })

		case "errors":
			let errorsLog = await printErrors({ count: 10 })
			errorsLog = prettifyArray(errorsLog.logs)
			return bot.sendMessage(msg.chat.id, errorsLog, { parse_mode: "HTML" })

		case "logs":
			let logs = await printLogs({ count: 10 })
			logs = prettifyJSON(logs.logs)
			return bot.sendMessage(msg.chat.id, logs, { parse_mode: "HTML" })

		default:
			return bot.sendMessage(msg.chat.id, "I don't know :(")
	}
})

// call this function with a chat id and the msg and it will send it:
module.exports = function(id, msg) {
	bot.sendMessage(id, msg)
}