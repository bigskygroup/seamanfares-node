const express = require("express")
const app = express()
const { join } = require("path")
const fs = require("fs")
// const logger = require("morgan")
// const helmet = require("helmet")
const favicon = require("serve-favicon")
const createError = require("http-errors")
const { createIndexEJS } = require("./functions")
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

// createIndexEJS(join(__dirname, "build"))

//routes
app.use(/^\/{0,1}[A-Za-z]{2}\/[A-Za-z]{2,22}\.htm\/{0,1}$/ , require("./src/server/static"))
app.use(["/", /[A-Za-z]{2}/], require("./src/server/index"))

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
// 	next(createError(404))
// })

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get("env") === "development" ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render("error")
})

app.listen(port, console.log(`skytours-node app is listening on ${port} at ${new Date().toLocaleString()}`))
module.exports = app
