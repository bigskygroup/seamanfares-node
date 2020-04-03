const siteFail = require("./siteFail")
const cron = require("node-cron")

cron.schedule("19,39,59 * * * *", siteFail)

module.exports = cron