// pages like https://www.sky-tours.com/en/es-spain.html

const express = require("express")
const app = express.Router()
const { join } = require("path")
const { readContent } = require("../../functions") //pass paths as if you are in root folder
const airports = require("../../data/cities-condensed") //returns an array
const countries = require("../../data/countries")

app.get("*", async (req, res, next) => {

	const parseUrl = req.baseUrl.split("/") //e.g  [ '', 'en', 'es-spain.html' ]
	const lang = parseUrl[1] //en
	const countryCode = parseUrl[2].split("-")[0] //es
	const receivedCountry = parseUrl[2].split("-")[1].match(/[^\.]+/)[0]
	const { name: country } = countries.find(item => item.code === countryCode.toUpperCase()) //Spain

if (country.toLowerCase().trim() !== receivedCountry.toLowerCase().trim()) {
		res.redirect(`/${lang}/${countryCode.toLowerCase().trim()}-${country.toLowerCase().trim()}.html`)
	}

	readContent(join("build", "locales", "lang", lang + ".json"))
		.then(json => JSON.parse(json))
		.then(object => [object["CHEAP_FLIGHTS_TO"], object["SEO_COUNTRY_CONTENT"]])
		.then(arr => {
			let string = ""
			string += `<h1>${arr[0]} ${country}</h1>`
			string += arr[1].replace(/###TO_COUNTRY###/g, country)
			return string
		})
		.then(content =>
			res.render("index", {
				minHeight: "0",
				lang: lang,
				//if there is a variable defined in ejs, it must be supplied, although with null:
				static: content,
				custom: null
			})
		)
		.catch(err => next())
})

module.exports = app