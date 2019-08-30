const express = require("express")
const app = express()
const React = require("react")
const ReactDOMServer = require("react-dom/server")
const path = require("path")
const logger = require("morgan")
const helmet = require("helmet")
const favicon = require("serve-favicon")
const createError = require("http-errors")
const indexRouter = require("./src/server/routes/index")
const usersRouter = require("./src/server/routes/users")
var port = process.env.PORT || "3070"

// app.use(logger('dev'));
// app.use(helmet({
// 	dnsPrefetchControl: false,
// 	hsts: false,
// }))
// app.use(helmet.contentSecurityPolicy({
// 	directives: {
// 		scriptSrc: ["'self'", 'www.google-analytics.com', 'ajax.googleapis.com', 'www.googletagmanager.com' ]
// 	}
// }))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use("/build", express.static(path.join(__dirname , "build") ))
app.use(express.static(path.join(__dirname, "build")))
// app.use("/public", express.static(path.join(__dirname , "public") ))
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

//routes
app.use("/", indexRouter)
app.use("/users", usersRouter)

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

app.listen(port, console.log(`skytours-node app is listening on ${port}`))
module.exports = app