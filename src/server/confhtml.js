//eg: http://localhost:3070/confhtml/123.html
const { join } = require("path")
const express = require("express")
const app = express.Router()
const { readContent } = require("../../functions") //pass paths as if you are in

app.get("*", async (req, res, next) => {
	const filename = req.baseUrl.match(/\d+\.html/gi)[0] //123456.html
	readContent(join("data", "logs", "confhtml", filename), "utf8")
		.then(content => res.status(200).send(content.replace(/id="root"/, ""))) //delete the id=root so there would NOT be a conflict with react-router and redirect to 404!
		.catch(err => next()) // if the file does not exist, return
})

module.exports = app