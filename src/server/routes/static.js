// pages like about us
const path = require("path")
const express = require("express")
const app = express.Router()
const babel = require("babel-register")
const React = require("react")
const ReactDOMServer = require("react-dom/server")
const { readContentOf, ofType } = require(path.join("..", "functions"))
const fs = require("fs")
require("babel-register")({
	presets: ["react"]
})



const Component = require("../../client/index.js")

/* GET users listing. */
app.get("/en/about.htm", (req, res) => {
	const reactHTML = ReactDOMServer.renderToString(Component())
	res.render("index" , {
		title: "Express",
		react: "<div data-reactroot=''></div> "
	})
})

module.exports = app