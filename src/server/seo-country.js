// pages like https://www.sky-tours.com/en/es-spain.html

const express = require("express")
const app = express.Router()
const { join } = require("path")
const { getTranslation, removeHTMLTags, t, rtlLangs } = require("../../functions") //pass paths as if you are in root folder
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

	let metaTitle, metaKeyword

	getTranslation(join("build", "locales", "lang", lang + ".json"))
		.then(object => {
			metaKeyword = object["KEYWORDS_LATEST_BOOKING"]
			return [object["CHEAP_FLIGHTS_TO"], object["SEO_COUNTRY_CONTENT"]]
		})
		.then(arr => {
			let string = ""
			metaTitle = `${arr[0]} ${country}`
			string += `<h1>${metaTitle}</h1>`
			string += arr[1].replace(/###TO_COUNTRY###/g, country)
			return `<div>${string}</div>`
		})
		.then(async content => {
			const titles = await getTranslation(join("build", "locales", "lang", lang + ".json"))
			const fallBack = await getTranslation(join("build", "locales", "lang", "en" + ".json"))
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
													${rtlLangs.includes(lang) ? `changeElementStyle("#footer-ssr")("rtl")` : null}
													${rtlLangs.includes(lang) ? `changeElementStyle("#content-ssr")("rtl")` : null}
											</script>`,
			t: word => t(word, titles, fallBack),
				$: {
					_SKY_TOURS: `${metaTitle} | Sky-tours.com`,
					OG_TITLE: `${metaTitle} | Sky-tours.com`,
					_DESCRIPTION: removeHTMLTags(content),
					OG_DESCRIPTION: removeHTMLTags(content),
					OG_IMAGE: "/images/st-logo.png",
					OG_URL: "https://www.sky-tours.com/",
					_KEYWORDS: `${metaKeyword}, ${country}`
				}
			})
		})
		.catch(err => next())
})

module.exports = app