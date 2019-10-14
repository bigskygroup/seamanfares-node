const fs = require("fs")
const path = require("path")
const util = require("util")
const { memoize } = require("f-tools")

// f object will hold the functions and export them:
const f = {}

// right-to-left languages
f.rtlLangs = ["ae", "eg", "ir", "jo", "lb", "sa" , "bh", "kw", "om", "qr"]

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
					`</body>`, `<script src="/script/general.js"></script>
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

module.exports = f