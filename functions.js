const fs = require("fs")
const path = require("path")
const util = require("util")

// f object will hold the functions and export them:
const f = {}

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
				.replace(`</body>`, `<%- custom ? custom : '' %> </body>`)
				.replace(
					`<title></title>`,
					`<title><%-$._SKY_TOURS%></title>
    <meta name="description" content="<%-$._DESCRIPTION%>" />
    <meta name="keywords" content="<%-$._KEYWORDS%>" />
    <meta property="og:title" content="<%-$.OG_TITLE%>" />
    <meta property="og:image" content="<%-$.OG_IMAGE%>" />
    <meta property="og:description" content="<%-$.OG_DESCRIPTION%>" />
    <meta property="og:url" content="<%-$.OG_URL%>" />
    <meta property="og:type" content="website" />`
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

f.memoize = function(fn) {
	if (!fn._cache) fn._cache = {}

	return function(arg) {
		const key = [...arguments].join("_")
		fn._cache[key] = fn._cache[key] || fn.apply(undefined, arguments)
		return fn._cache[key]
	}
}

//pass paths as if you are in root folder
f.readContent = location => util.promisify(fs.readFile)(location, "utf8")
f.readFolderFiles = location => util.promisify(fs.readdir)(location, "utf8")
f.readTranslation = (location = join("build", "locales", "lang", "en" + ".json")) => {
	return f.readContent(location).then(res => JSON.parse(res))
}
//returns a memoized object of all the translated fields
f.getTranslation = f.memoize(f.readTranslation)

f.extractToRegex = arr => (key, type) => {
	return type === 1
		? arr.map(
				item => new RegExp(`^\/[A-Za-z]{2}-${item[key].trim()}-[A-Za-z]{3}-[^<>\.]*.html\/{0,1}$`, "i")
		  )
		: arr.map(item => new RegExp(`^\/[A-Za-z]{2}\/${item[key].trim()}-[^<>\.]*.html\/{0,1}$`, "i"))
}



f.removeHTMLTags = str => str.replace(/<[^>]+>/gi, "")

module.exports = f