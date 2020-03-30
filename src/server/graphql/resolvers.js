const ipResolver = require("./ipResolver")
const logResolver = require("./logResolver")
const sendEmailResolver = require("./sendEmailResolver")
const decryptResolver = require("./decryptResolver")
const confhtmlResolver = require("./confhtmlResolver")
const emailAppResolver = require("./emailAppResolver")

module.exports = Object.assign({}, ipResolver , logResolver, sendEmailResolver, decryptResolver, confhtmlResolver, emailAppResolver)