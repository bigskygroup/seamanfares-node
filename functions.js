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
f.readContent = location => util.promisify(fs.readFile)(location, "utf8")

module.exports = f