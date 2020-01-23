const ipResolver = require("./ipResolver")
const logResolver = require("./logResolver")
const sendEmailResolver = require("./sendEmailResolver")
const decryptResolver = require("./decryptResolver")


module.exports = Object.assign({}, ipResolver , logResolver, sendEmailResolver, decryptResolver)