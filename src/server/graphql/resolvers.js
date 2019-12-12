const ipResolver = require("./ipResolver")
const logResolver = require("./logResolver")
const sendEmailResolver = require("./sendEmailResolver")


module.exports = Object.assign({}, ipResolver , logResolver, sendEmailResolver)