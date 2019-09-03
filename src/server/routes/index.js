const path = require("path")
const express = require("express")
const app = express.Router()
const babel = require("babel-register")
const React = require("react")
const ReactDOMServer = require("react-dom/server")

require("babel-register")({
	presets: ["react"]
})

const Component = require("../../client/index.js")

app.get( "*" ,(req, res, next) => {
	let lang = ""
	if(/[A-Za-z]{2}\/{0,1}/.test(req.params["0"])) {
		lang = req.params["0"].match(/\w{2}/)[0]
	}
	const reactHTML = ReactDOMServer.renderToString(Component())
	res.render("index", {
		react: reactHTML,
		lang: lang , 
		//if there is a variable defined in ejs, it must be supplied, although with null:
		custom: null
	})
	
	next()
})

module.exports = app