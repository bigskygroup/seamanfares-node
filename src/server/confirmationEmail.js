//sample url:
//http://localhost:3070/viewtrip/?orderid=4418071&tname=Galleani&lang=en

const { join } = require("path")
const express = require("express")
const app = express.Router()

const { getTranslation, t, rtlLangs , readContent, ejs } = require("../../functions") //pass paths as if you are in

const json = require("../client/viewtrip")

//http://localhost:3070/viewtrip/?orderid=4418071&tname=Galleani&lang=en
app.get("*", (req, res, next) => {
	const id = req.query.orderid
	const lastName = req.query.tname
	const lang = req.query.lang ? req.query.lang : "en"

	if (!id) return next()

	readContent(join("src", "client", "confirmationEmail.html"), "utf8")
		.then(data => {
			const emailContent = ejs(data)(json)
			res.send(
				`
		<!DOCTYPE html>
		<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
		    <style type="text/css">
		        body { display: flex; justify-content: center; align-items: center }
		    </style>
		    <title>Confirmation email</title>
		</head>
		<body>
		
		<div>
		${emailContent}
		</div>
		</body>
		</html>
			`
			)
		})

		.catch(err => next(err))
})

module.exports = app