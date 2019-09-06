// pages like about us

const express = require("express")
const app = express.Router()
const fs = require("fs")
const { join } = require("path")
const { readContent } = require("../../functions") //pass paths as if you are in root folder

/*
const dir = require("../../data/bigfile.js")
const holder = []
dir.forEach(item=> {
	const output = {
		"code": item.code,
	"name": item.name,
	"name_city": item.name_city,
	"cc": item.cc,
	}
	holder.push(output)
})
fs.writeFile(`data/cities-condensed.js`, JSON.stringify(holder, null, 2) , "utf8" , (err)=> {if(err)throw err})
*?
*/


app.get("*", async (req, res, next) => {

	const parseUrl = req.baseUrl.split("/") //e.g  [ '', 'en', 'about.htm' ]
	const lang = parseUrl[1]
	const page = parseUrl[2]

	readContent(join("build", "locales", "info", lang, page))
		.then(content => {
			res.render("index", {
				// react: reactHTML,
				minHeight: "0",
				lang: lang,
				//if there is a variable defined in ejs, it must be supplied, although with null:
				static: content,
				custom: null
			})
		})
		.catch(err => next())
})

module.exports = app