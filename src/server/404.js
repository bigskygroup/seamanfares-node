const { join } = require("path")
const express = require("express")
const app = express.Router()
const { getTranslation, t, rtlLangs } = require("../../functions") //pass paths as if you are in

app.get("*", (req, res, next) => {
	let lang = req.originalUrl.split("/")[1]
	lang = /^[A-Za-z]{2}$/.test(lang) ? lang : "en"

	res.redirect("/" + lang + "/404")
})

module.exports = app