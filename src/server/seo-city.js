// pages like https://www.sky-tours.com/en/bcn-barcelona.html

const express = require("express")
const app = express.Router()
const { join } = require("path")
const { readContent, getTranslation } = require("../../functions") //pass paths as if you are in root folder
const airports = require("../../data/cities-condensed") //returns an array
const countries = require("../../data/countries")

app.get("*", async (req, res, next) => {
	const parseUrl = req.baseUrl.split("/") //e.g  [ '', 'en', 'about.htm' ]
	const lang = parseUrl[1]
	const airportCode = parseUrl[2].split("-")[0]
	const receivedName = parseUrl[2].split("-")[1].match(/[^\.]+/)[0]

	//code: BCN  //name: Barcelona
	const { code, name, cc } = airports.find(item => new RegExp(airportCode, "i").test(item.code))
	const { name: country } = countries.find(item => item.code === cc)

	if (name.toLowerCase().trim() !== receivedName.toLowerCase().trim()) {
		res.redirect(`/${lang}/${code.toLowerCase().trim()}-${name.toLowerCase().trim()}.html`)
	}

	readContent(join("build", "locales", "lang", lang + ".json"))
		.then(json => JSON.parse(json))
		.then(object => [object["CHEAP_FLIGHTS_TO"], object["SEO_CITY_CONTENT"]])
		.then(arr => {
			let string = ""
			string += `<h1>${arr[0]} ${name}, ${country} (${cc}) ${code}</h1>`
			string += arr[1].replace(/###TO_CITY###/g, `${name}, (${cc}) ${code}`)
			return string
		})
		.then(async content => {
			const footerTitles = await getTranslation(join("build", "locales", "lang", lang + ".json"))
			res.render("index", {
				minHeight: "0",
				lang: lang,
				//if there is a variable defined in ejs, it must be supplied, although with null:
				static: content,
				custom: null,
				t: word => footerTitles[word],
			})
		})
		.catch(err => next())
})

module.exports = app
