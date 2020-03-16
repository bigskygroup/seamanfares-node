const fs = require("fs")
const util = require("util")
const { join } = require("path")
const { writeIfNotExist } = require("../../../functions")
const mkdirPromise = util.promisify(fs.mkdir)
const r = {}

const scriptToFix = `<script defer>
  document.querySelectorAll("*").forEach(item=> {
    const href = item.getAttribute("href")
    const src = item.getAttribute("src")
    if(href && /^\//.test(href) ) item.setAttribute("href", "https://www.sky-tours.com" + href )
    if(src && /^\//.test(src) ) item.setAttribute("src", "https://www.sky-tours.com" + src )
  })
</script>
</body>
`

r.storeOrderHtml = ({ json }) => {
	json = JSON.parse(json)
	const { order, html } = json

	if (!order || !/^\d+$/.test(order) || !html) {
		return { id: "Error: check the parameters" }
	}

	// writing html files folder, from root folder:
	const destination = join("data", "logs", "confhtml", `${order}.html`)
	return writeIfNotExist(destination, html.replace('id="root"', "").replace("</body>", scriptToFix))
		.then(() => ({ id: order }))
		.catch(async err => {
			if (err.code === "ENOENT") {
				// folder does not exist,make folder
				return await mkdirPromise(join("data", "logs", "confhtml"))
					.then(async () => await r.storeOrderHtml({ json: JSON.stringify(json) }))
					.catch(err => console.error(`>> src/server/graphql/confhtmlResolver.js -- ${err}`))
			} else return { id: "Error: file exists" }
		})
}

module.exports = r