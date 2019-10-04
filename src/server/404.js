const { join } = require("path")
const express = require("express")
const app = express.Router()
const { getTranslation, t, rtlLangs } = require("../../functions") //pass paths as if you are in

app.get("*", (req, res, next) => {
	const lang = req.originalUrl.split("/")[1] || "en"

res.redirect("/" + lang + "/404")
})

module.exports = app