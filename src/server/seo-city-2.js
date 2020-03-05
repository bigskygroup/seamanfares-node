// pages like https://www.sky-tours.com/en-tbs-dxb-tbilisi-dubai.html
const express = require("express")
const app = express.Router()
const { join } = require("path")
const {
	getTranslation,
	removeHTMLTags,
	t,
	rtlLangs,
	cleanCityName,
	groupHasLang
} = require("../../functions") //pass paths as if you are in root folder
const { pipe, memoize } = require("f-tools")
const airports = require("../../data/cities-condensed") //returns an array
const countries = require("../../data/countries")
const sequraFn = require("../client/sequraFn")

app.get("*", async (req, res, next) => {
	const parseUrl = req.baseUrl.split("-") //e.g  [ '/en', 'tbs', 'dxb', 'tbilisi', 'dubai.html' ]
	const lang = parseUrl[0].match(/\w+/)[0]
	const airportCode1 = parseUrl[1]
	const airportCode2 = parseUrl[2]

	//code: BCN  //name: Barcelona
	const fromObject = airports.find(item => new RegExp(airportCode1, "i").test(item.code))
	const code1 = fromObject && fromObject.code ? fromObject.code : ""
	const name1 = fromObject && fromObject.name ? fromObject.name : ""
	const cc1 = fromObject && fromObject.cc ? fromObject.cc : ""

	const toObject = airports.find(item => new RegExp(airportCode2, "i").test(item.code))
	const code2 = toObject && toObject.code ? toObject.code : ""
	const name2 = toObject && toObject.name ? toObject.name : ""
	const cc2 = toObject && toObject.cc ? toObject.cc : ""

	const lookUpCountry1 = countries.find(item => item.code === cc1)
	const country1 = lookUpCountry1 && lookUpCountry1.name ? lookUpCountry1.name : ""

	const lookUpCountry2 = countries.find(item => item.code === cc2)
	const country2 = lookUpCountry2 && lookUpCountry2.name ? lookUpCountry2.name : ""

	const url = `/${lang}-${code1.toLowerCase()}-${code2.toLowerCase()}-${cleanCityName(name1)}-${cleanCityName(
		name2
	)}.html`


	if (req.baseUrl.toLowerCase() !== encodeURI(url).toLowerCase()) {
		res.redirect(url)
		return
	}

	// console.log(code1, name1, cc1, country1) //BCN Barcelona ES Spain
	// console.log(code2, name2, cc2, country2)
	Promise.all([
		getTranslation(join("build", "locales", "lang", lang + ".json")),
		getTranslation(join("build", "locales", "lang", "en" + ".json"))
	])
		.then(([titles, fallBack]) => {
			let string = ""
			const metaTitle = `${titles["CHEAP_FLIGHTS_FROM"]}${name1} to ${name2}, ${country2} (${cc2}) ${code2}`
			string += `<h1>${metaTitle}</h1>`
			string += titles["SEO_CITY_CONTENT"]
				.replace(/###TO_CITY###/g, `${name2}, (${cc2}) ${code2}`)
				.replace(/###FROM_CITY###/g, `${name1}, (${cc1}) ${code1}`)

			//creating the links for airports in the same country
			const getOtherCities = memoize(ccArg => airports.filter(item => item.cc === ccArg && item.name_city))
			const randomize = array => {
				return array.length < 12 ? array : array.sort((a, b) => 0.5 - Math.random())
			}
			const pick = array => array.slice(0, 12)
			const otherCitiesFn = pipe(getOtherCities, randomize, pick) // an array of objects from airports selected by country code like ES
			const otherCitiesArray = otherCitiesFn(cc2)
			const map = array => {
				if (!array.length) return ""
				let string = ""
				const rows = array.forEach(
					item =>
						(string += `<p><a href="/${lang}/${item.code.toLowerCase()}-${cleanCityName(item.name)}.html">${
							titles["FLIGHTS_TO"]
						} ${item.name}</a></p>`)
				)
				return `<div class="col-12 col-sm-6">${string}</div>`
			}
			const col1 = map(otherCitiesArray.slice(0, 6))
			const col2 = map(otherCitiesArray.slice(6, 12))

			const container = `<div class="container"><div class="row">${col1}${col2}</div></div>`

			const content = `<div class="static">
			<div>${string}<br><h2>${titles["FLIGHTS_TO_CITIES"]} <b>${country2}</b></h2>${container}<br>
			<a href="./${lang}/all-countries.html" class="d-block text-right"><button class="secondary font18">${titles["FLIGHTS_TO_COUNTRIES"]} 🠊 </button></a>
			</div></div>`

			return {
				titles,
				fallBack,
				content,
				metaTitle
			}
		})
		.then(({ titles, fallBack, content, metaTitle }) => {
			res.render("index", {
				minHeight: "0",
				lang: lang,
				//if there is a variable defined in ejs, it must be supplied, although with null:
				static: content,
				t: word => t(word, titles, fallBack),
				custom: `
						<script> 
						${lang === "es" ? sequraFn : ""}
								const style = document.querySelector("#content-ssr .static").style 
								style.backgroundImage = "linear-gradient(#f7f7f7, #e6e6e6)"
								style.paddingBottom = "50px"
								style.paddingTop = "50px"				
								${rtlLangs.includes(lang) ? `changeElementStyle("#footer-ssr")("rtl")` : ""}
								${rtlLangs.includes(lang) ? `changeElementStyle("#content-ssr")("rtl")` : ""}
								${groupHasLang(lang, "en", true) ? "" : `document.querySelector("#ad-with-us").style.display = "none"`}

								
						</script>
											`,
				$: {
					_SKY_TOURS: `${metaTitle} | Sky-tours.com`,
					OG_TITLE: `${metaTitle} | Sky-tours.com`,
					_DESCRIPTION: removeHTMLTags(content),
					OG_DESCRIPTION: removeHTMLTags(content),
					OG_IMAGE: "/images/st-logo.png",
					OG_URL: `https://${req.get("host")}${url}`,
					_KEYWORDS: `${titles["KEYWORDS_LATEST_BOOKING"]}, ${name1}, ${country1}, ${cc1}, ${code1} ${name2}, ${country2}, ${cc2}, ${code2}`,
					CANONICAL: `https://${req.get("host")}${url}`,
					data_location: `'${JSON.stringify({ ip: req.ip, userAgent: req.headers["user-agent"] })}'`
				}
			})
		})
		.catch(err => next())
})

module.exports = app