// pages like https://www.sky-tours.com/en/bcn-barcelona.html

const express = require("express")
const app = express.Router()
const { join } = require("path")
const { getTranslation, removeHTMLTags, t, rtlLangs , ipFields, iplocate} = require("../../functions") //pass paths as if you are in root folder
const { pipe, memoize } = require("f-tools")
const airports = require("../../data/cities-condensed") //returns an array
const countries = require("../../data/countries")


app.get("*", async (req, res, next) => {
	const parseUrl = req.baseUrl.split("/") //e.g  [ '', 'en', 'about.htm' ]
	const lang = parseUrl[1]
	const airportCode = parseUrl[2].split("-")[0]
	let receivedName = parseUrl[2].match(/-([^<>\.]*).html\/{0,1}/i)[1]

	//code: BCN  //name: Barcelona
	const { code, name, cc } = airports.find(item => new RegExp(airportCode, "i").test(item.code))
	let nameInUrl = name
	if (/\s|,/gi.test(nameInUrl)) {
		nameInUrl = nameInUrl
			.replace(/,/g, "")
			.replace(/\s/g, "-")
			.replace(/-{2,}/g, "-")
	}
	if (/\s|,/gi.test(receivedName)) {
		receivedName = receivedName
			.replace(/,/g, "")
			.replace(/\s/g, "-")
			.replace(/-{2,}/g, "-")
	}
	const { name: country } = countries.find(item => item.code === cc)

	if (nameInUrl.toLowerCase().trim() !== receivedName.toLowerCase().trim()) {
		res.redirect(`/${lang}/${code.toLowerCase().trim()}-${nameInUrl.toLowerCase().trim()}.html`)
		return
	}

	let metaTitle, metaKeyword

	getTranslation(join("build", "locales", "lang", lang + ".json"))
		.then(object => {
			metaKeyword = object["KEYWORDS_LATEST_BOOKING"]
			return [
				object["CHEAP_FLIGHTS_TO"],
				object["SEO_CITY_CONTENT"],
				object["FLIGHTS_TO_CITIES"],
				object["FLIGHTS_TO"]
			]
		})
		.then(arr => {
			let string = ""
			metaTitle = `${arr[0]} ${name}, ${country} (${cc}) ${code}`
			string += `<h1>${metaTitle}</h1>`
			string += arr[1].replace(/###TO_CITY###/g, `${name}, (${cc}) ${code}`)
			string = `<div>${string}</div>`

			//creating the links for airports in the same country
			const getOtherCities = memoize(ccArg => airports.filter(item => item.cc === ccArg && item.name_city))
			const randomize = array => {
				return array.length < 12 ? array : array.sort((a, b) => 0.5 - Math.random())
			}
			const pick = array => array.slice(0, 12)
			const otherCitiesFn = pipe(
				getOtherCities,
				randomize,
				pick
			) // an array of objects from airports selected by country code like ES
			const otherCitiesArray = otherCitiesFn(cc)
			const map = array => {
				if (!array.length) return ""
				let string = ""
				const rows = array.forEach(
					item =>
						(string += `<p><a href="/${lang}/${item.code.toLowerCase()}-${item.name.toLowerCase()}.html">${
							arr[3]
						} ${item.name}</a></p>`)
				)
				return `<div class="col-12 col-sm-6">${string}</div>`
			}
			const col1 = map(otherCitiesArray.slice(0, 6))
			const col2 = map(otherCitiesArray.slice(6, 12))

			const container = `<div class="container"><div class="row">${col1}${col2}</div></div>`

			return `<div class="static"><div>${string}<br><h2>${
				arr[2]
			} <b>${country}</b></h2>${container}</div></div>`
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
				t: word => t(word, titles, fallBack),
				custom: `<script> 
													const style = document.querySelector("#content-ssr .static").style 
													style.backgroundImage = "linear-gradient(#f7f7f7, #e6e6e6)"
													style.paddingBottom = "50px"
													style.paddingTop = "50px"	
													${rtlLangs.includes(lang) ? `changeElementStyle("#footer-ssr")("rtl")` : null}				
													${rtlLangs.includes(lang) ? `changeElementStyle("#content-ssr")("rtl")` : null}	
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
					_KEYWORDS: `${metaKeyword}, ${name}, ${country}, ${cc}, ${code}`,
					CANONICAL: `https://${req.get(
						"host"
					)}/${lang}/${code.toLowerCase().trim()}-${nameInUrl.toLowerCase().trim()}.html`,
					data_location: JSON.stringify(ipFields(detectLocation))
				}
			})
		})
		.catch(err => next())
})

module.exports = app