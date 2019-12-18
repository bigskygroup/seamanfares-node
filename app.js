const express = require("express")
const app = express()
const { join } = require("path")
const fs = require("fs")
const mongoose = require("mongoose")
const rfs = require("rotating-file-stream")
const helmet = require("helmet")
const graphqlHTTP = require("express-graphql")
var cors = require("cors")
const favicon = require("serve-favicon")
const { cachTypes, createIndexEJS, extractToRegex, generateName, morgan } = require("./functions")
const { memoize } = require("f-tools")
const airports = require("./data/cities-condensed")
const countries = require("./data/countries")
const { dbName, dbPassword, dbAccessIP, NODE_ENV } = require("./config.js")
const PORT = process.env.PORT || 3070
process.env.NODE_ENV = NODE_ENV

//database connection
mongoose
	.connect(
		`mongodb://${dbName}:${dbPassword}@${
			NODE_ENV === "production" ? "localhost" : dbAccessIP
		}:27017/${dbName}`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	)
	.then(res => {
		console.log("connected to database", dbName)
	})
	.catch(err => console.log("Your MongoDB setting in the app.js file is not correct. ", err))
const IP = require("./src/server/models/ip")


app.use(helmet({
	dnsPrefetchControl: false,
	hsts: false,
}))
// app.use(helmet.contentSecurityPolicy({
// 	directives: {
// 		scriptSrc: ["'self'", 'www.google-analytics.com', 'ajax.googleapis.com', 'www.googletagmanager.com' ]
// 	}
// }))

// static files and cache policy, set for 3 days
const cachPolicy = "public, max-age=259200"
const cachOptions = {
	setHeaders: function(res, path) {
		if (cachTypes.includes(express.static.mime.lookup(path))) {
			// Custom Cache-Control for above files
			res.setHeader("Cache-Control", cachPolicy)
		}
	}
}

// app.use(cors())
app.use(express.static(join(__dirname, "build"), cachOptions))
app.use(favicon(join(__dirname, "build", "favicon.ico")))

//template engine set-up
app.set("views", join(__dirname, "build"))
app.set("view engine", "ejs")
app.set("trust proxy", true)
createIndexEJS(join(__dirname, "build"))

const airportsArray = memoize(extractToRegex(airports))
const countriesArray = memoize(extractToRegex(countries))

//routes
app.use(
	"/graphql",
	cors(),
	graphqlHTTP({
		schema: require("./src/server/graphql/schema"),
		rootValue: require("./src/server/graphql/resolvers"),
		graphiql: true
	})
)

// logger defined after static to avoid static files logged:
const accessLogStream = rfs(generateName(), {
	interval: "1d", // rotate daily
	path: join(__dirname, "data", "logs", "morgan")
})
app.use(morgan("jsonLogs", { stream: accessLogStream }))


app.get("/viewtrip/*", require("./src/server/confirmationEmail"))
app.get("/confirmation*", require("./src/server/confirmation"))
app.get("/advertising.html", (req, res) => res.render("pages/advertising.ejs"))

app.use(/^\/[A-Za-z]{2}\/countries\.html\/{0,1}$/ , require("./src/server/all-countries"))
app.use(airportsArray("code", 2), require("./src/server/seo-city"))
app.use(airportsArray("code", 1), require("./src/server/seo-city-2"))

app.use(countriesArray("code", 2), require("./src/server/seo-country"))

app.use(/^\/[A-Za-z]{2}\/[A-Za-z_]{2,35}\.htm\/{0,1}$/, require("./src/server/static"))

const routeToIndex = [
	"/book",
	/^\/[A-Za-z]{2}\/search\/{0,1}/,
	/^\/[A-Za-z]{2}\/{0,1}$/,
	/^\/[A-Za-z]{2}\/404$/,
	/^\/$/
]

app.use(routeToIndex, require("./src/server/index"))

//handling wrong requests at the end
app.use(require("./src/server/404"))
const date = new Date().toLocaleString()
app.listen(PORT, console.log(`skytours-node app is listening on ${PORT} at ${date}`))
module.exports = app