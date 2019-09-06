// pages like https://www.sky-tours.com/en/bcn-barcelona.html

const express = require("express")
const app = express.Router()
const fs = require("fs")
const { join } = require("path")
const { readContent } = require("../../functions") //pass paths as if you are in root folder
const airports = require("../../data/cities-condensed") //returns an array

app.get("*", async (req, res, next) => {

	const parseUrl = req.baseUrl.split("/") //e.g  [ '', 'en', 'about.htm' ]

	const lang = parseUrl[1]
	const airportCode = parseUrl[2].split("-")[0]

//code: BCN  //name: Barcelona
const { code, name } = airports.find(item=> new RegExp(airportCode, "i").test(item.code))

res.render("index", {
	minHeight: "0",
				lang: lang,
				//if there is a variable defined in ejs, it must be supplied, although with null:
				static: null,
				custom: null
})

	// readContent(join("build", "locales", "info", lang, page))
	// 	.then(content => {
	// 		res.render("index", {
	// 			// react: reactHTML,
	// 			minHeight: "0",
	// 			lang: lang,
	// 			//if there is a variable defined in ejs, it must be supplied, although with null:
	// 			static: content,
	// 			custom: null
	// 		})
	// 	})
	// 	.catch(err => next())
	res.end()

})

module.exports = app