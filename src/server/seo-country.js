// pages like https://www.sky-tours.com/en/es-spain.html

const express = require("express")
const app = express.Router()
const { join } = require("path")
const { readContent, getTranslation } = require("../../functions") //pass paths as if you are in root folder
const airports = require("../../data/cities-condensed") //returns an array
const countries = require("../../data/countries")

app.get("*", async (req, res, next) => {
	const parseUrl = req.baseUrl.split("/") //e.g  [ '', 'en', 'es-spain.html' ]
	const lang = parseUrl[1] //en
	const countryCode = parseUrl[2].split("-")[0] //es
	let receivedCountry = parseUrl[2].match(/-([^<>\.]*).html\/{0,1}/i)[1]
	const { name: country } = countries.find(item => item.code === countryCode.toUpperCase()) //Spain

	let countryInUrl = country
	if (/\s|,/gi.test(countryInUrl)) {
		countryInUrl = countryInUrl
			.replace(/,/g, "")
			.replace(/\s/g, "-")
			.replace(/-{2,}/g, "-")
	}
	if (/\s|,/gi.test(receivedCountry)) {
		receivedCountry = receivedCountry
			.replace(/,/g, "")
			.replace(/\s/g, "-")
			.replace(/-{2,}/g, "-")
	}

	if (countryInUrl.toLowerCase().trim() !== receivedCountry.toLowerCase().trim()) {
		res.redirect(`/${lang}/${countryCode.toLowerCase().trim()}-${countryInUrl.toLowerCase().trim()}.html`)
		return
	}

	readContent(join("build", "locales", "lang", lang + ".json"))
		.then(json => JSON.parse(json))
		.then(object => [object["CHEAP_FLIGHTS_TO"], object["SEO_COUNTRY_CONTENT"]])
		.then(arr => {
			let string = ""
			string += `<h1>${arr[0]} ${country}</h1>`
			string += arr[1].replace(/###TO_COUNTRY###/g, country)
			return `<div>${string}</div>`
		})
		.then(async content => {
			const footerTitles = await getTranslation(join("build", "locales", "lang", lang + ".json"))
			res.render("index", {
				minHeight: "0",
				lang: lang,
				//if there is a variable defined in ejs, it must be supplied, although with null:
				static: content,
				custom: `<script> 
													const style = document.querySelector("#content-ssr").style 
													style.backgroundImage = "linear-gradient(#f7f7f7, #e6e6e6)"
													style.paddingBottom = "50px"
													style.paddingTop = "50px"
											</script>`,
				t: word => footerTitles[word]
			})
		})
		.catch(err => next())
})

module.exports = app