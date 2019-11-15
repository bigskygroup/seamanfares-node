const { join } = require("path")
const express = require("express")
const app = express.Router()
const { getTranslation, t, rtlLangs, ipFields, iplocate } = require("../../functions") //pass paths as if you are in

app.get("*", (req, res, next) => { 
	const splitedUrl = req.path.split("/")
	const lang = splitedUrl[2] || "en"
	getTranslation(join("build", "locales", "lang", lang + ".json"))
		.then(async titles => {


			const fallBack = await getTranslation(join("build", "locales", "lang", "en" + ".json"))
			const detectLocation = await iplocate(req.ip)
			res.render("index", {
				// react: reactHTML,
				minHeight: null,
				lang: lang,
				t: word => t(word, titles, fallBack),

				//if there is a variable defined in ejs, it must be supplied, although with null:
				static: null,
				custom: `
<script>
${rtlLangs.includes(lang) ? `changeElementStyle("#footer-ssr")("rtl")` : null}

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
					data_location: `'${JSON.stringify(ipFields(detectLocation))}'`
				}
			})
		})
		.catch(err => next())
})

module.exports = app