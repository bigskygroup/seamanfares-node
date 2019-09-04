const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")
const util = require("util")
// const logger = require("morgan")
// const helmet = require("helmet")
const favicon = require("serve-favicon")
const createError = require("http-errors")
const indexRouter = require("./src/server/routes/index")
const staticRouter = require("./src/server/routes/static")
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

app.use(express.static(path.join(__dirname, "build")))
app.use(favicon(path.join(__dirname, "build", "favicon.ico")))

// logger defined after static to avoid static files logged:
// app.use(logger('dev'));

//template engine set-up
app.set("views", path.join(__dirname, "build"))
app.set("view engine", "ejs")

// need to run this block first time only. to create index.ejs inside "build"
const buidDirectoryFiles = fs.readdirSync("build", "utf8")
if (!buidDirectoryFiles.includes("index.ejs")) {
	fs.readFile(path.join("build", "index.html"), "utf8", (err, data) => {
		if (err) console.log("Error reading /build/index.html: " + err)
		let content = data
		content = content
			.replace(
				`<div id="root">`,
				`<div id="root" <%- minHeight  ? 'style="min-height:' + minHeight + ' " ' :  '' %> >
				`
			)
			.replace(`<div id="footer-ssr">`, `<div id="footer-ssr"><%- include('footer') %>`)
			.replace(`</body>`, `<% custom ? custom : '' %> </body>`)

		fs.writeFile(path.join("build", "index.ejs"), content, err => {
			if (err) console.log(err)
			//must automatically rename index.html so it wouldn't conflict with routing at "/"
			fs.rename(
				path.join("build", "index.html"),
				path.join("build", "indexDotHTML already used for indexDotEJS"),
				err => {
					if (err) console.log(err)
				}
			)
		})
	})
}

//routes
// app.use("/", staticRouter)
app.use(["/", /{A-Za-z}{2}/], indexRouter)

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