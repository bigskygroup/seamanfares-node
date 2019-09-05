// pages like about us

const express = require("express")
const app = express.Router()
const fs = require("fs")
const { join } = require("path")
const { readContent } = require("../../functions") //pass paths as if you are in root folder

/* GET users listing. */
app.get("*", async (req, res, next) => {
	const parseUrl = req.baseUrl.split("/") //e.g  [ '', 'en', 'about.htm' ]
	const lang = parseUrl[1]
	const page = parseUrl[2]

	const content = await readContent(join("build", "locales", "info", lang, page))

	res.render("index", {
		// react: reactHTML,
		minHeight: "0",
		lang: lang,
		//if there is a variable defined in ejs, it must be supplied, although with null:
		static: content,
		custom: null
	})
})

module.exports = app