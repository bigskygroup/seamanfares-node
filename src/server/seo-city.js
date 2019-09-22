  
// pages like https://www.sky-tours.com/en/bcn-barcelona.html

const express = require("express")
const app = express.Router()
const { join } = require("path")
const { readContent, getTranslation, removeHTMLTags } = require("../../functions") //pass paths as if you are in root folder
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

	readContent(join("build", "locales", "lang", lang + ".json") , "utf8")
		.then(json => JSON.parse(json))
		.then(object => {
			metaKeyword = object["KEYWORDS_LATEST_BOOKING"]
			return [object["CHEAP_FLIGHTS_TO"], object["SEO_CITY_CONTENT"]]
		})
		.then(arr => {
			let string = ""
			metaTitle = `${arr[0]} ${name}, ${country} (${cc}) ${code}`
			string += `<h1>${metaTitle}</h1>`
			string += arr[1].replace(/###TO_CITY###/g, `${name}, (${cc}) ${code}`)
			return `<div>${string}</div>`
		})
		.then(async content => {
			const footerTitles = await getTranslation(join("build", "locales", "lang", lang + ".json"))
			res.render("index", {
				minHeight: "0",
				lang: lang,
				//if there is a variable defined in ejs, it must be supplied, although with null:
				static: content,
				t: word => footerTitles[word],
				custom: `<script> 
													const style = document.querySelector("#content-ssr").style 
													style.backgroundImage = "linear-gradient(#f7f7f7, #e6e6e6)"
													style.paddingBottom = "50px"
													style.paddingTop = "50px"						
											</script>`,
				$: {
					_SKY_TOURS: `${metaTitle} | Sky-tours.com`,
					OG_TITLE: `${metaTitle} | Sky-tours.com`,
					_DESCRIPTION: removeHTMLTags(content),
					OG_DESCRIPTION: removeHTMLTags(content),
					OG_IMAGE: "/images/st-logo.png",
					OG_URL: "https://www.sky-tours.com/",
					_KEYWORDS: `${metaKeyword}, ${name}, ${country}, ${cc}, ${code}`,
				}
			})
		})
		.catch(err => next())
})

module.exports = app