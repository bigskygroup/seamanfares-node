const { join } = require("path")
const express = require("express")
const app = express.Router()
const { readContent, getTranslation } = require("../../functions") //pass paths as if you are in root folder
// const babel = require("babel-register")
// const React = require("react")
// const ReactDOMServer = require("react-dom/server")

// require("babel-register")({
// 	presets: ["react"]
// })

// const Component = require("../../client/index.js")

app.get("*", (req, res, next) => {
	const lang = req.baseUrl.split("/")[1] || "en"

	getTranslation(join("build", "locales", "lang", lang + ".json"))
		.then(titles => {
			// const reactHTML = ReactDOMServer.renderToString(Component())
			res.render("index", {
				// react: reactHTML,
				minHeight: "700px",
				lang: lang,
				t: word => titles[word.trim()],

				//if there is a variable defined in ejs, it must be supplied, although with null:
				static: null,
				custom: null
			})
		})
		.catch(err => next())
})

module.exports = app