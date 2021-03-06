// pages like https://www.sky-tours.com/en-multiple-destinations.html


const express = require("express")
const app = express.Router()
const { join } = require("path")
const { getTranslation, t, rtlLangs, groupHasLang, ejs } = require("../../functions") //pass paths as if you are in root folder
const sequraFn = require("../client/sequraFn")
const indexSSR = require("../client/index")

app.get("*", async (req, res, next) => {
	const parseUrl = req.baseUrl.split("-") //e.g [ '/en', 'multiple', 'destinations.html' ]
	const lang = parseUrl[0].match(/\w+/)[0]

	Promise.all([
		getTranslation(join("build", "locales", "lang", lang + ".json")),
		getTranslation(join("build", "locales", "lang", "en" + ".json"))
	])
		.then(async ([titles, fallBack]) => {
			res.render("index", {
				// react: reactHTML,
				minHeight: null,
				lang: lang,
				t: word => t(word, titles, fallBack),

				//if there is a variable defined in ejs, it must be supplied, although with null:
				static: ejs(indexSSR)({ t: word => t(word, titles, fallBack) }),

				custom: `
<script>
${lang === "es" ? sequraFn : ""}
${rtlLangs.includes(lang) ? `changeElementStyle("#footer-ssr")("rtl")` : ""}
${groupHasLang(lang, "en", true) ? "" : `document.querySelector("#ad-with-us").style.display = "none"`}


 
</script>
				`,
				$: {
					_SKY_TOURS: `${titles["TITLE_INDEX"]} | Sky-tours.com`,
					OG_TITLE: `${titles["TITLE_INDEX"]} | Sky-tours.com`,
					_DESCRIPTION:
						"Cheap airline tickets. Only here you'll get the cheapest airline ticket deals available. We search all airlines for cheap flights and show you  the most discounted airfares. Get your cheapest ticket here - with price guarantee!",
					OG_DESCRIPTION:
						"Cheap airline tickets. Only here you'll get the cheapest airline ticket deals available. We search all airlines for cheap flights and show you  the most discounted airfares. Get your cheapest ticket here - with price guarantee!",
					OG_IMAGE: "/images/st-logo.png",
					OG_URL: `https://${req.get("host")}${req.baseUrl}`,
					_KEYWORDS: titles["KEYWORDS_LATEST_BOOKING"],
					CANONICAL: `https://${req.get("host")}${req.baseUrl}`,
					data_location: `'${JSON.stringify({ ip: req.ip, userAgent: req.headers["user-agent"] })}'`
				}
			})
		})
		.catch(err => next())
})

module.exports = app