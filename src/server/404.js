const { join } = require("path")
const express = require("express")
const app = express.Router()
const { getTranslation, t, rtlLangs } = require("../../functions") //pass paths as if you are in

app.get("*", (req, res, next) => {
	let lang = req.originalUrl.split("/")[1]
	getTranslation(join("build", "locales", "lang", lang + ".json"))
	.then(titles => {
		res.redirect("/" + lang + "/404")
	})
	// if the language does not exist:
	.catch(err=> res.redirect("/" + "en" + "/404"))

	
})

module.exports = app