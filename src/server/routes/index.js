const path = require("path")
const express = require("express")
const app = express.Router()
const babel = require("babel-register")
const React = require("react")
const ReactDOMServer = require("react-dom/server")

require("babel-register")({
	presets: ["react"]
})

const Component = require("../../client/component.js")

app.get("/", (req, res, next) => {
	const reactHTML = ReactDOMServer.renderToString(Component())
	res.render("index", {
		react: "reactHTML",
		//if there is a variable defined in ejs, it must be supplied, although with null:
		custom: null
	})
})

module.exports = app