// pages like about us

const express = require("express")
const app = express.Router()
const fs = require("fs")
const { join } = require("path")
const { readContent, getTranslation, t, rtlLangs } = require("../../functions") //pass paths as if you are in root folder
const iplocate = require("node-iplocate")

app.get("*", (req, res, next) => {
	const parseUrl = req.baseUrl.split("/") //e.g  [ '', 'en', 'about.htm' ]
	const lang = parseUrl[1]
	const page = parseUrl[2]

	readContent(join("build", "locales", "info", lang, page), "utf8")
		.then(async content => {
			const titles = await getTranslation(join("build", "locales", "lang", lang + ".json"))
			const fallBack = await getTranslation(join("build", "locales", "lang", "en" + ".json"))
			const detectLocation = await iplocate(req.ip)
			res.render("index", {
				// react: reactHTML,
				minHeight: "0",
				lang: lang,
				//if there is a variable defined in ejs, it must be supplied, although with null:
				static: `<div ><div class="static">${content}</div></div>`,
				t: word => t(word, titles, fallBack),
				custom: `<script>
													const style = document.querySelector("#content-ssr .static").style
													style.paddingTop = "50px"
													style.paddingBottom = "50px"
													${rtlLangs.includes(lang) ? `changeElementStyle("#footer-ssr")("rtl")` : null}
													${rtlLangs.includes(lang) ? `changeElementStyle("#content-ssr")("rtl")` : null}
											</script>`,

				$: {
					_SKY_TOURS: `${titles[getTitle(page)]} | Sky-tours.com`,
					OG_TITLE: `${titles["TITLE_INDEX"]} | Sky-tours.com`,
					_DESCRIPTION:
						"Cheap airline tickets. Only here you'll get the cheapest airline ticket deals available. We search all airlines for cheap flights and show you  the most discounted airfares. Get your cheapest ticket here - with price guarantee!",
					OG_DESCRIPTION:
						"Cheap airline tickets. Only here you'll get the cheapest airline ticket deals available. We search all airlines for cheap flights and show you  the most discounted airfares. Get your cheapest ticket here - with price guarantee!",
					OG_IMAGE: "/images/st-logo.png",
					OG_URL: `https://${req.get("host")}${req.baseUrl}`,
					_KEYWORDS: titles["KEYWORDS_LATEST_BOOKING"],
					CANONICAL: `https://${req.get("host")}${req.baseUrl}`,
					data_location: JSON.stringify(detectLocation)
				}
			})
		})
		.catch(err => next())
})

function getTitle(page) {
	page = page.split(".")[0]
	switch (page) {
		case "privacy":
			return "PRIVACY"
		case "cookies_policy":
			return "COOKIES_POLICY_TEXT_LINK"
		case "terms":
			return "TERMS_CONDITIONS"
		case "about":
			return "ABOUT_US"
		case "gdpr":
			return "DATA_PROTECTION_LINK"
		case "rules":
			return "RULES_REGULATIONS"
		case "canxprotect":
			return "CANCELLATION"
		case "luggage_allowance":
			return "BAGGAGE_ALLOWANCE"
	}
}

module.exports = app