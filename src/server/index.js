const { join } = require("path")
const express = require("express")
const app = express.Router()
const { getTranslation, t , rtlLangs} = require("../../functions") //pass paths as if you are in

app.get("*", (req, res, next) => {
	const lang = req.baseUrl.split("/")[1] || "en"

	getTranslation(join("build", "locales", "lang", lang + ".json"))
		.then(async titles => {
			// const reactHTML = ReactDOMServer.renderToString(Component())
			const fallBack = await getTranslation(join("build", "locales", "lang", "en" + ".json"))
			res.render("index", {
				// react: reactHTML,
				minHeight: "700px",
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
					OG_URL: "https://www.sky-tours.com/",
					_KEYWORDS: titles["KEYWORDS_LATEST_BOOKING"]
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