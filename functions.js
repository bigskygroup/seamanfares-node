const fs = require("fs")
const fsPromise = require("fs").promises
const path = require("path")
const util = require("util")
const ejs = require("ejs")
const { memoize, curry } = require("f-tools")
const iplocate = require("node-iplocate")
const fetch = require("node-fetch")
const morgan = require("morgan")

// f object will hold the functions and export them:
const f = {}

// right-to-left languages
f.rtlLangs = ["ae", "eg", "ir", "jo", "lb", "sa", "bh", "kw", "om", "qr", "so", "td", "mr"]
f.LANG_EN_GROUP = ["au", "ca", "en", "gb", "id", "ie", "in", "nz", "ph", "pk", "sg"]
f.LANG_ES_GROUP = [
	"ar",
	"bo",
	"co",
	"cl",
	"cr",
	"do",
	"ec",
	"es",
	"gt",
	"hn",
	"mx",
	"ni",
	"pa",
	"pe",
	"pr",
	"py",
	"sv",
	"uy",
	"ve"
]
f.cachTypes = [
	"audio/mpeg",
	"text/css",
	"image/png",
	"image/gif",
	"image/x-icon",
	"image/svg+xml",
	"image/jpeg",
	"font/woff",
	"font/woff2",
	"font/otf",
	"font/eot",
	"font/ttf"
]

f.createIndexEJS = folder => {
	// need to run this block first time only. to create index.ejs inside "build"
	const buidDirectoryFiles = fs.readdirSync(folder, "utf8")
	if (!buidDirectoryFiles.includes("index.ejs")) {
		fs.readFile(path.join(folder, "index.html"), "utf8", (err, data) => {
			if (err) console.log("Error reading /build/index.html: " + err)
			let content = data
			content = content
				.replace(
					`<div id="root">`,
					`<div id="root" <%- minHeight  ? 'style="min-height:' + minHeight + ' " ' :  '' %> >
				`
				)
				.replace(`<div id="content-ssr">`, `<div id="content-ssr"><%- static ? static : '' %>`)
				.replace(`<div id="footer-ssr">`, `<div id="footer-ssr"><%- include('footer') %>`)
				.replace(
					`</body>`,
					`<script src="/script/general.js"></script>
					<%- custom ? custom : '' %> </body>`
				)
				.replace(
					`<title></title>`,
					`<title><%-$._SKY_TOURS%></title>
    <meta name="description" content="<%-$._DESCRIPTION%>" />
    <meta name="keywords" content="<%-$._KEYWORDS%>" />
    <meta property="og:title" content="<%-$.OG_TITLE%>" />
    <meta property="og:image" content="<%-$.OG_IMAGE%>" />
    <meta property="og:description" content="<%-$.OG_DESCRIPTION%>" />
    <meta property="og:url" content="<%-$.OG_URL%>" />
    <meta property="og:type" content="website" />
		<link rel="canonical" href="<%-$.CANONICAL%>" />
		<div id="userLocation" data-location=<%-$.data_location%> ></div>
    `
				)

			fs.writeFile(path.join(folder, "index.ejs"), content, err => {
				if (err) console.log(err)
				//must automatically rename index.html so it wouldn't conflict with routing at "/"
				fs.rename(
					path.join(folder, "index.html"),
					path.join(folder, "indexDotHTML already used for indexDotEJS"),
					err => {
						if (err) console.log(err)
					}
				)
			})
		})
	}
}

//pass paths as if you are in root folder
f.readContent = memoize(util.promisify(fs.readFile))
f.readJson = destination => {
	return util
		.promisify(fs.readFile)(destination, "utf8")
		.then(res => JSON.parse(res))
		.catch(err => null)
}
f.readFolderFiles = location => util.promisify(fs.readdir)(location, "utf8")
f.readTranslation = (location = join("build", "locales", "lang", "en" + ".json")) => {
	return f.readContent(location, "utf8").then(res => JSON.parse(res))
}
//returns a memoized object of all the translated fields
// use only for json files
f.getTranslation = memoize(f.readTranslation)

f.extractToRegex = arr => (key, type) => {
	return type === 1
		? arr.map(item => new RegExp(`^\/[A-Za-z]{2}-${item[key].trim()}-[A-Za-z]{3}-[^<>\.]*.html\/{0,1}$`, "i"))
		: arr.map(item => new RegExp(`^\/[A-Za-z]{2}\/${item[key].trim()}-[^<>\.]*.html\/{0,1}$`, "i"))
}

f.removeHTMLTags = str => str.replace(/<[^>]+>/gi, "")

//takes 2 translation objects and returns one value or the other:
f.t = (word, translationJSON, defualtTranslation) => {
	if (translationJSON[word.trim()] && translationJSON[word.trim()] !== "null") {
		return translationJSON[word.trim()]
	} else if (defualtTranslation[word.trim()] && defualtTranslation[word.trim()] !== "null") {
		return defualtTranslation[word.trim()]
	} else return word
}
f.removeQuote = str => (typeof str === "string" ? str.replace(/'/g, " ") : str)

f.ipFields = function({
	ip,
	city,
	country,
	country_code,
	continent,
	latitude,
	longitude,
	time_zone,
	subdivision,
	subdivision2
}) {
	const r = f.removeQuote
	return {
		ip: r(ip) || "",
		city: r(city) || "",
		country: r(country) || "",
		country_code: r(country_code) || "",
		continent: r(continent) || "",
		latitude: latitude || "",
		longitude: longitude || "",
		time_zone: r(time_zone) || "",
		subdivision: r(subdivision) || "",
		subdivision2: r(subdivision2) || ""
	}
}

f.iplocate = memoize(iplocate)

//ipinfodb.com
f.ipProvider1 = ip => {
	if (typeof ip !== "string") ip = ip.toString()
	const request = `http://api.ipinfodb.com/v3/ip-city/?key=690109629d12af0cb4e7829d39ec444fdebc77eb646a89b009c7243ad83ce61d&format=json&ip=${ip}`
	return fetch(request)
		.then(res => res.json())
		.then(res => {
			const r = f.removeQuote
			const response = {
				ip: r(res.ipAddress) || "",
				city: r(res.cityName) || "",
				country: r(res.countryName) || "",
				latitude: res.latitude.toString() || "",
				longitude: res.longitude.toString() || "",
				city2: r(res.regionName) || "",
				countryCode: r(res.countryCode) || ""
			}
			// f.ipJsonCreator(path.join("data", "ip"), response)
			return response
		})
		.catch(err => response)
}

f.ipProvider2 = ip => {
	if (typeof ip !== "string") ip = ip.toString()

	return iplocate(ip)
		.then(res => {
			const r = f.removeQuote
			const response = {
				ip: r(res.ip) || "",
				city: r(res.city) || "",
				country: r(res.country) || "",
				latitude: res.latitude.toString() || "",
				longitude: res.longitude.toString() || "",
				city2: r(res.subdivision) || "",
				countryCode: r(res.country_code) || ""
			}
			// f.ipJsonCreator(path.join("data", "ip"), response)
			return response
		})
		.catch(err => response)
}

f.ipJsonCreator = (folder, response = {}) => {
	//don't write invalid data
	if (!response.ip || !response.city) return
	const newEntry = {}
	newEntry[response.ip] = response
	const fileName = response.ip.match(/^\d+/g)[0]
	const pathToDestination = path.join(folder, fileName + ".json")

	fsPromise
		.readFile(pathToDestination, { flag: "a+", encoding: "utf8" })
		.then(res => (res.length ? JSON.parse(res) : {}))
		.then(res => Object.assign({}, res, newEntry))
		.then(res => fsPromise.writeFile(pathToDestination, JSON.stringify(res), "utf8"))
		.catch(err => console.log(err))
}

f.ejs = memoize(ejs.compile)

f.createStream = (path, type) => {
	let stream

	if (type === "read") stream = fs.createReadStream(path, { encoding: "utf8", highWaterMark: 128 * 1024 })
	else if (type === "write") stream = fs.createWriteStream(path, { encoding: "utf8" })
	return new Promise((resolve, reject) => {
		let data = ""
		stream.on("data", chunk => (data += chunk))
		stream.on("end", () => resolve(data))
		stream.on("error", err => reject(err))
	})
}
f.generateName = (a, b) => {
	// return new Date(a)
	// 		.getMinutes()
	// 		.toString()
	// 		.concat(".log")

	return new Date(a)
		.toLocaleDateString()
		.replace(/\//g, "-")
		.concat(".log")
}

morgan.token("jsonLogs", function(tokens, req, res) {
	const log = JSON.stringify({
		method: tokens.method(req, res),
		url: tokens.url(req, res),
		status: tokens.status(req, res),
		resContentLength: tokens.res(req, res, "content-length"),
		responseTime: tokens["response-time"](req, res) + " ms",
		userAgent: tokens["user-agent"](req, res),
		ip: tokens["remote-addr"](req, res),
		date: tokens.date(req, res, "iso"),
		remoteUser: tokens["remote-user"](req, res)
	})

	return log
})
f.morgan = morgan

f.cleanCityName = name => {
	name = name.substring(0, name.indexOf("(")) + name.substring(name.indexOf(")") + 1)

	return name
		.toLocaleLowerCase("en-US")
		.replace(/\s|\//g, "-")
		.replace(/,/g, "")
		.replace(/-{2,}/g, "-")
		.trim()
}

// check if language is in a group of languages or is one of the languages
// use to display components depending on different languages if needed
f.groupHasLang = function(current, compareWith, isGroup = false) {
	let checkIt = false
	if (isGroup) {
		// if it is inside the language group
		switch (compareWith) {
			case "en":
				checkIt = f.LANG_EN_GROUP.includes(current)
				break
			case "es":
				checkIt = f.LANG_ES_GROUP.includes(current)
				break
			default:
				break
		}
	} else {
		// if setting is for individual language
		checkIt = compareWith === current
	}
	return checkIt
}

f.isGodIP = ({ ip }) => {
	if (process.env.NODE_ENV && process.env.NODE_ENV === "development") return true
	const ipGods = [
		"82.209.195.19",
		"82.209.195.27",
		"178.124.187.77",
		"82.209.194.15",
		// "::1",
		// "127.0.0.1",
		// "::ffff:127.0.0.1",
		"178.124.172.174",
		"139.162.234.140",
		"90.74.0.167",
		"139.162.248.82",
		"92.54.212.220"
	]

	return ipGods.includes(ip)
}

module.exports = f