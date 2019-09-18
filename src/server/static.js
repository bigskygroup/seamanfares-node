// pages like about us

const express = require("express")
const app = express.Router()
const fs = require("fs")
const { join } = require("path")
const { readContent, getTranslation } = require("../../functions") //pass paths as if you are in root folder

app.get("*", (req, res, next) => {
	const parseUrl = req.baseUrl.split("/") //e.g  [ '', 'en', 'about.htm' ]
	const lang = parseUrl[1]
	const page = parseUrl[2]

	readContent(join("build", "locales", "info", lang, page))
		.then(async content => {
			const trans = await getTranslation(join("build", "locales", "lang", lang + ".json"))
			res.render("index", {
				// react: reactHTML,
				minHeight: "0",
				lang: lang,
				//if there is a variable defined in ejs, it must be supplied, although with null:
				static: `<div>${content}</div>`,
				t: word => trans[word],
				custom: `<script>
													const style = document.querySelector("#content-ssr").style
													style.paddingTop = "50px"
													style.paddingBottom = "50px"
											</script>`,

				$: {
					_SKY_TOURS: `${trans[getTitle(page)]} | Sky-tours.com`,
					OG_TITLE: `${trans["TITLE_INDEX"]} | Sky-tours.com`,
					_DESCRIPTION:
						"Cheap airline tickets. Only here you'll get the cheapest airline ticket deals available. We search all airlines for cheap flights and show you  the most discounted airfares. Get your cheapest ticket here - with price guarantee!",
					OG_DESCRIPTION:
						"Cheap airline tickets. Only here you'll get the cheapest airline ticket deals available. We search all airlines for cheap flights and show you  the most discounted airfares. Get your cheapest ticket here - with price guarantee!",
					OG_IMAGE: "/images/logo.png",
					OG_URL: "https://www.sky-tours.com/",
					_KEYWORDS: trans["KEYWORDS_LATEST_BOOKING"]
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