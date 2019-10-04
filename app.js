const express = require("express")
const app = express()
const { join } = require("path")
const fs = require("fs")
// const logger = require("morgan")
// const helmet = require("helmet")
const favicon = require("serve-favicon")
const { createIndexEJS, extractToRegex } = require("./functions")
const { memoize }= require("f-tools")
const airports = require("./data/cities-condensed")
var port = process.env.PORT || "3070"

// app.use(helmet({
// 	dnsPrefetchControl: false,
// 	hsts: false,
// }))
// app.use(helmet.contentSecurityPolicy({
// 	directives: {
// 		scriptSrc: ["'self'", 'www.google-analytics.com', 'ajax.googleapis.com', 'www.googletagmanager.com' ]
// 	}
// }))

app.use(express.static(join(__dirname, "build")))
app.use(favicon(join(__dirname, "build", "favicon.ico")))

// logger defined after static to avoid static files logged:
// app.use(logger('dev'));

//template engine set-up
app.set("views", join(__dirname, "build"))
app.set("view engine", "ejs")

createIndexEJS(join(__dirname, "build"))

const airportsArray = memoize(extractToRegex(airports))

//routes
 app.use(airportsArray("code" , 2), require("./src/server/seo-city"))
 app.use(airportsArray("code" , 1), require("./src/server/seo-city-2"))

app.use(airportsArray("cc", 2), require("./src/server/seo-country"))
app.use(/^\/[A-Za-z]{2}\/[A-Za-z_]{2,22}\.htm\/{0,1}$/, require("./src/server/static"))

app.get("/advertising.html", (req, res) => res.render("pages/advertising.ejs"))
app.get(["/book", "/confirmation"] , require("./src/server/index"))

const routeToIndex = [
/^\/[A-Za-z]{2}\/confirmation/,
/^\/[A-Za-z]{2}\/search\/{0,1}/,
/^\/[A-Za-z]{2}\/{0,1}$/ , /^\/[A-Za-z]{2}\/404$/,/^\/$/  ]

app.use( routeToIndex, require("./src/server/index"))

app.get("/book" , require("./src/server/index"))


//handeling wrong requests at the end
app.use( require("./src/server/404"))
const date =  new Date().toLocaleString()
app.listen(port, console.log(`skytours-node app is listening on ${port} at ${date}`))
module.exports = app