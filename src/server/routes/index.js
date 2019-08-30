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

app.get("/", function(req, res, next) {
	const reactHTML = ReactDOMServer.renderToString(Component())
	console.log(reactHTML)
	res.render(path.join(__dirname, "..", "..", "..", "build", "index.ejs"), {
		title: "Express",
		react: reactHTML
	})
})

// app.get("/", (req, res) => {
// 	res.sendFile(path.join(__dirname, "..", "..", "..", "build", "index.html"))
// })

module.exports = app

/*
sky-tours.com >> React app  ???

static pages: about us



*/