// pages like https://www.sky-tours.com/en-tbs-dxb-tbilisi-dubai.html
const express = require("express")
const app = express.Router()
const { join } = require("path")
const { getTranslation, removeHTMLTags, t, rtlLangs } = require("../../functions") //pass paths as if you are in root folder
const { pipe, memoize } = require("f-tools")
const airports = require("../../data/cities-condensed") //returns an array
const countries = require("../../data/countries")
const iplocate = require("node-iplocate")

app.get("*", async (req, res, next) => {
	const parseUrl = req.baseUrl.split("-") //e.g  [ '/en', 'tbs', 'dxb', 'tbilisi', 'dubai.html' ]
	const lang = parseUrl[0].match(/\w+/)[0]
	const airportCode1 = parseUrl[1]
	const airportCode2 = parseUrl[2]

	//code: BCN  //name: Barcelona
	const { code: code1, name: name1, cc: cc1 } = airports.find(item =>
		new RegExp(airportCode1, "i").test(item.code)
	)
	const { code: code2, name: name2, cc: cc2 } = airports.find(item =>
		new RegExp(airportCode2, "i").test(item.code)
	)

	const { name: country1 } = countries.find(item => item.code === cc1)
	const { name: country2 } = countries.find(item => item.code === cc2)
	const url = `/${lang}-${code1.toLowerCase()}-${code2.toLowerCase()}-${name1
		.toLowerCase()
		.replace(/,/g, "")
		.replace(/\s/g, "-")}-${name2
		.toLowerCase()
		.replace(/,/g, "")
		.replace(/\s/g, "-")}.html`

	if (req.baseUrl !== url) {
		res.redirect(url)
		return
	}

	let metaTitle, metaKeyword
	// console.log(code1, name1, cc1, country1) //BCN Barcelona ES Spain
	// console.log(code2, name2, cc2, country2)
	getTranslation(join("build", "locales", "lang", lang + ".json"))
		.then(object => {
			metaKeyword = object["KEYWORDS_LATEST_BOOKING"]
			return [
				object["CHEAP_FLIGHTS_FROM"],
				object["SEO_CITY_CONTENT"],
				object["FLIGHTS_TO_CITIES"],
				object["FLIGHTS_TO"]
			]
		})
		.then(arr => {
			let string = ""
			metaTitle = `${arr[0]}${name1} to ${name2}, ${country2} (${cc2}) ${code2}`
			string += `<h1>${metaTitle}</h1>`
			string += arr[1]
				.replace(/###TO_CITY###/g, `${name2}, (${cc2}) ${code2}`)
				.replace(/###FROM_CITY###/g, `${name1}, (${cc1}) ${code1}`)

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
			const otherCitiesArray = otherCitiesFn(cc2)
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
			} <b>${country2}</b></h2>${container}</div></div>`
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
				custom: `
						<script> 
								const style = document.querySelector("#content-ssr .static").style 
								style.backgroundImage = "linear-gradient(#f7f7f7, #e6e6e6)"
								style.paddingBottom = "50px"
								style.paddingTop = "50px"				
								${rtlLangs.includes(lang) ? `changeElementStyle("#footer-ssr")("rtl")` : null}
								${rtlLangs.includes(lang) ? `changeElementStyle("#content-ssr")("rtl")` : null}

								
						</script>
											`,
				$: {
					_SKY_TOURS: `${metaTitle} | Sky-tours.com`,
					OG_TITLE: `${metaTitle} | Sky-tours.com`,
					_DESCRIPTION: removeHTMLTags(content),
					OG_DESCRIPTION: removeHTMLTags(content),
					OG_IMAGE: "/images/st-logo.png",
					OG_URL: `https://${req.get("host")}${url}`,
					_KEYWORDS: `${metaKeyword}, ${name1}, ${country1}, ${cc1}, ${code1} ${name2}, ${country2}, ${cc2}, ${code2}`,
					CANONICAL: `https://${req.get("host")}${url}`,
					data_location: JSON.stringify(detectLocation)
				}
			})
		})
		.catch(err => next())
})

module.exports = app