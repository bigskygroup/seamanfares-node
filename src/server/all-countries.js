// pages like https://www.sky-tours.com/en/es-spain.html

const express = require("express")
const app = express.Router()
const { join } = require("path")
const { getTranslation, removeHTMLTags, t, rtlLangs, ipFields, iplocate } = require("../../functions") //pass paths as if you are in root folder
const { pipe, memoize } = require("f-tools")
const airports = require("../../data/cities-condensed") //returns an array
const countries = require("../../data/countries")

app.get("*", async (req, res, next) => {
	const parseUrl = req.baseUrl.split("/") //e.g  [ '', 'en', 'es-spain.html' ]
	const lang = parseUrl[1] //en

	const listOfCountries = memoize(createList)(countries, lang)
	//returns a sorted array

	let metaKeyword

	getTranslation(join("build", "locales", "lang", lang + ".json"))
		.then(object => {
			metaKeyword = object["KEYWORDS_LATEST_BOOKING"]
			return [object["FLIGHTS_TO_COUNTRIES"]]
		})
		.then(arr => {
			let string = ""
			metaTitle = arr[0]
			string += `<h1>${metaTitle}</h1>`

			string = `<div>${string}</div>`
			const content = map(listOfCountries, lang)

			const col1 = map(listOfCountries.slice(0, Math.round(listOfCountries.length / 2) + 1), lang)
			const col2 = map(listOfCountries.slice(Math.round(listOfCountries.length / 2) + 1), lang)

			const container = `<div class="container"><div class="row">${col1}${col2}</div></div>`

			return `<div class="static"><div>${string}${container}</div></div>`
		})

		.then(async content => {
			const titles = await getTranslation(join("build", "locales", "lang", lang + ".json"))
			const fallBack = await getTranslation(join("build", "locales", "lang", "en" + ".json"))
			const detectLocation = await iplocate(req.ip)
			res.render("index", {
				minHeight: "0",
				lang: lang,
				//if there is a variable defined in ejs, it must be supplied, although with null:
				static: content,
				custom: `<script> 
													const style = document.querySelector("#content-ssr .static").style 
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
					OG_URL: `https://${req.get("host")}/${lang}/all-countries.html`,
					_KEYWORDS: `${metaKeyword}`,
					CANONICAL: `https://${req.get("host")}/${lang}/all-countries.html`,
					data_location: JSON.stringify(ipFields(detectLocation))
				}
			})
		})
		.catch(err => next())
})

const map = ((array, lang) => {
	if (!array.length) return ""
	let string = ""
	const rows = array.forEach(
		item =>
			(string += `<p><a href="/${lang}/${item.code.toLowerCase()}-${item.name.toLowerCase()}.html">${
				item.translatedName
			}</a></p>`)
	)
	return `<div class="col-12 col-sm-6">${string}</div>`
}).memoize()

function createList(list, lang) {
	return list.map(item => {
		return {
			name: item.name,
			translatedName: item.reach(`l10n.${lang}`) ? item.reach(`l10n.${lang}`) : item.name,
			code: item.code
		}
	})
	.sort((a, b) => { 
		//sorting them by name
		const nameA = a.translatedName.toUpperCase()
		const nameB = b.translatedName.toUpperCase()
		return nameA < nameB ? -1 : 1
	})
}


module.exports = app