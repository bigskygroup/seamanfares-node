// pages like https://www.sky-tours.com/en/bcn-barcelona.html

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
	const parseUrl = req.baseUrl.split("/") //e.g  [ '', 'en', 'about.htm' ]
	const lang = parseUrl[1]
	const airportCode = parseUrl[2].split("-")[0]
	let receivedName = cleanCityName(parseUrl[2].match(/-([^<>\.]*).html\/{0,1}/i)[1])

	//code: BCN  //name: Barcelona
	const foundObject = airports.find(item => new RegExp(airportCode, "i").test(item.code))
	const code = foundObject &&  foundObject.code ? foundObject.code : ""
	const name = foundObject && foundObject.name ? foundObject.name: ""
	const cc = foundObject && foundObject.cc ? foundObject.cc: ""

	const nameInUrl = cleanCityName(name)

	const findCountry = countries.find(item => item.code === cc)
	const country = findCountry && findCountry.name ? findCountry.name : ""

	if (receivedName !== encodeURI(nameInUrl).toLowerCase()) {
		res.redirect(`/${lang}/${code.toLowerCase().trim()}-${nameInUrl}.html`)
		return
	}

	Promise.all([
		getTranslation(join("build", "locales", "lang", lang + ".json")),
		getTranslation(join("build", "locales", "lang", "en" + ".json"))
	])
		.then(([titles, fallBack]) => {
			let string = ""
			const metaTitle = `${titles["CHEAP_FLIGHTS_TO"]} ${name}, ${country} (${cc}) ${code}`
			string += `<h1>${metaTitle}</h1>`
			string += titles["SEO_CITY_CONTENT"].replace(/###TO_CITY###/g, `${name}, (${cc}) ${code}`)
			string = `<div>${string}</div>`

			//creating the links for airports in the same country
			const getOtherCities = memoize(ccArg => airports.filter(item => item.cc === ccArg && item.name_city))
			const randomize = array => {
				return array.length < 12 ? array : array.sort((a, b) => 0.5 - Math.random())
			}
			const pick = array => array.slice(0, 12)
			const otherCitiesFn = pipe(getOtherCities, randomize, pick) // an array of objects from airports selected by country code like ES
			const otherCitiesArray = otherCitiesFn(cc)
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

			const content = `<div class="static"><div>${string}<br><h2>${titles["FLIGHTS_TO_CITIES"]} <b>${country}</b></h2>${container}<br>
				<a href="./all-countries.html" class="d-block text-right"><button class="secondary font18">${titles["FLIGHTS_TO_COUNTRIES"]} 🠊 </button></a>
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
				custom: `<script> 
				${lang === "es" ? sequraFn : ""}
													const style = document.querySelector("#content-ssr .static").style 
													style.backgroundImage = "linear-gradient(#f7f7f7, #e6e6e6)"
													style.paddingBottom = "50px"
													style.paddingTop = "50px"	
													${rtlLangs.includes(lang) ? `changeElementStyle("#footer-ssr")("rtl")` : ""}				
													${rtlLangs.includes(lang) ? `changeElementStyle("#content-ssr")("rtl")` : ""}	
													${groupHasLang(lang, "en", true) ? "" : `document.querySelector("#ad-with-us").style.display = "none"`}
											</script>`,
				$: {
					_SKY_TOURS: `${metaTitle} | Sky-tours.com`,
					OG_TITLE: `${metaTitle} | Sky-tours.com`,
					_DESCRIPTION: removeHTMLTags(content),
					OG_DESCRIPTION: removeHTMLTags(content),
					OG_IMAGE: "/images/st-logo.png",
					OG_URL: `https://${req.get(
						"host"
					)}/${lang}/${code.toLowerCase().trim()}-${nameInUrl.toLowerCase().trim()}.html`,
					_KEYWORDS: `${titles["KEYWORDS_LATEST_BOOKING"]}, ${name}, ${country}, ${cc}, ${code}`,
					CANONICAL: `https://${req.get(
						"host"
					)}/${lang}/${code.toLowerCase().trim()}-${nameInUrl.toLowerCase().trim()}.html`,
					data_location: `'${JSON.stringify({ ip: req.ip, userAgent: req.headers["user-agent"] })}'`
				}
			})
		})
		.catch(err => next())
})

module.exports = app