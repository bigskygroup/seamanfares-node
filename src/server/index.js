const { join } = require("path")
const express = require("express")
const app = express.Router()
const { getTranslation, t, rtlLangs, morgan, ejs, groupHasLang } = require("../../functions") //pass paths as if you are in
const f = require("f-tools")
const indexSSR = require("../client/index")
const sequraFn = require("../client/sequraFn")

app.get("*", (req, res, next) => {
	const splitedUrl = req.baseUrl.split("/")
	let lang = splitedUrl[1] && splitedUrl[1].length === 2 ? splitedUrl[1] : "en"
	lang = req.query.lang ? req.query.lang : lang

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
				static:
					// req.baseUrl.length < 4 ||
					// (splitedUrl[1] && splitedUrl[1].match(/myreservation|viewtrip/gi)) ||
					// (splitedUrl[2] && splitedUrl[2].match(/myreservation|viewtrip/gi)) ||
					// (splitedUrl[1] && splitedUrl[1].match(/index\.php/gi))
					// 	? ejs(indexSSR)({ t: word => t(word, titles, fallBack) })
					// 	: 
						"",
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

// root folder
// const babel = require("babel-register")
// const React = require("react")
// const ReactDOMServer = require("react-dom/server")

// require("babel-register")({
// 	presets: ["react"]
// })

// const Component = require("../../client/index.js")