const fs = require("fs")
const fsPromise = require("fs").promises
const path = require("path")
const util = require("util")
const ejs = require("ejs")
const { memoize } = require("f-tools")
const iplocate = require("node-iplocate")
const fetch = require("node-fetch")

// f object will hold the functions and export them:
const f = {}

// right-to-left languages
f.rtlLangs = ["ae", "eg", "ir", "jo", "lb", "sa", "bh", "kw", "om", "qr"]

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
	if (translationJSON[word.trim()] && translationJSON[word.trim()] != "null") {
		return translationJSON[word.trim()]
	} else {
		return defualtTranslation[word.trim()]
	}
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
				city2: r(res.regionName) || ""
			}
			f.ipJsonCreator(path.join("data", "ip"), response)
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
				city2: r(res.subdivision) || ""
			}
			f.ipJsonCreator(path.join("data", "ip"), response)
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

f.storeLogs = () => {
	const errorLogs = fs.createReadStream(path.join("data", "logs", "err.log"), { encoding: "utf8" })
	errorLogs
		.on("data", data => {
			// data = data.replace(/\n/g, ",")
			// data = "[" + data + "]"
			data = data.split(/\n/)
			console.log("------------- I am receiving data: -----------", data, typeof data, data.length)
		})

		
}

module.exports = f