// pages like about us

const express = require("express")
const app = express.Router()
const fs = require("fs")
const { join } = require("path")
const f = require("f-tools")
const {
	readContent,
	getTranslation,
	t,
	rtlLangs,
	readFolderFiles,
	morgan,
	groupHasLang,
} = require("../../functions") //pass paths as if you are in root folder
const countries = require("../../data/countries")
const sequraFn = require("../client/sequraFn")

app.get("*", (req, res, next) => {
	const parseUrl = req.baseUrl.split("/") //e.g  [ '', 'en', 'about.htm' ]
	const lang = parseUrl[1]
	const page = parseUrl[2]

	Promise.all([
		getTranslation(join("build", "locales", "lang", lang + ".json")),
		getTranslation(join("build", "locales", "lang", "en" + ".json")),
		readFolderFiles(join("build", "locales", "info")),
	])
		.then(async ([titles, fallBack, languages]) => {
			const isSiteMap = page.toLowerCase().trim() === "sitemap.htm" // true or false
			const isLuggage = page.toLowerCase().trim() === "luggage_allowance.htm" // true or false
			const isSupport = page.toLowerCase().trim() === "support_levels.htm" // true or false
			let content
			if (isSiteMap) content = createSiteMap(titles, fallBack, lang, languages)
			else if (isLuggage) {
				content =
					(await readContent(join("build", "locales", "info", lang, page), "utf8")) +
					"</td></tr></table></div>"
				content = content
					.replace(/<td>\s+flybe\s+<\/td>/gi, "<td>TUI Airways</td>")
					.replace(
						"https://fi-en.flybe.com/flightInfo/baggage.htm#Holdbaggage",
						"https://www.tui.co.uk/destinations/info/faq/luggage-allowance"
					)
					.replace(
						/<td>\s+<a href="https:\/\/www\.flybe\.com\/cam\/initCheckIn\.do"[.\s\w=">]+<\/a>\s*<\/td>/gi,
						"<td></td>"
					)
			} else if (isSupport) content = await readContent(join("build", "locales", "info", "en", page), "utf8")
			else content = await readContent(join("build", "locales", "info", lang, page), "utf8")

			//remove php smarty consts and replace with locales
			content = content.replace(/{\$smarty.const.(.+)}/gi, (a, b, c, e) => {
				const find = (word) => (titles[word] && titles[word] !== "null" ? titles[word] : fallBack[word])
				const replacement = find(b)
				return replacement
			})

			return {
				content,
				titles,
				fallBack,
			}
		})
		.then(({ titles, fallBack, content, metaTitle }) => {
			res.render("index", {
				// react: reactHTML,
				minHeight: "0",
				lang: lang,
				//if there is a variable defined in ejs, it must be supplied, although with null:
				static: `<div ><div class="static">${content}</div></div>`,
				t: (word) => t(word, titles, fallBack),
				custom: `<script>
				${lang === "es" ? sequraFn : ""}
													const style = document.querySelector("#content-ssr .static").style
													style.paddingTop = "50px"
													style.paddingBottom = "50px"
													${rtlLangs.includes(lang) ? `changeElementStyle("#footer-ssr")("rtl")` : ""}
													${rtlLangs.includes(lang) ? `changeElementStyle("#content-ssr")("rtl")` : ""}
													${groupHasLang(lang, "en", true) ? "" : `document.querySelector("#ad-with-us").style.display = "none"`}
											</script>`,

				$: {
					_SKY_TOURS: `${
						titles[getTitle(page)] && titles[getTitle(page)] !== "null"
							? titles[getTitle(page)]
							: null || (content.match(/<h1/i) && content.match(/<h1/i).length > 1)
							? content.match(/<h1[^>]*>([^<]+)<\/h1>/i)[1]
							: null || ""
					} | Sky-tours.com`,
					OG_TITLE: `${titles["TITLE_INDEX"]} | Sky-tours.com`,
					_DESCRIPTION:
						"Cheap airline tickets. Only here you'll get the cheapest airline ticket deals available. We search all airlines for cheap flights and show you  the most discounted airfares. Get your cheapest ticket here - with price guarantee!",
					OG_DESCRIPTION:
						"Cheap airline tickets. Only here you'll get the cheapest airline ticket deals available. We search all airlines for cheap flights and show you  the most discounted airfares. Get your cheapest ticket here - with price guarantee!",
					OG_IMAGE: "/images/st-logo.png",
					OG_URL: `https://${req.get("host")}${req.baseUrl}`,
					_KEYWORDS: titles["KEYWORDS_LATEST_BOOKING"],
					CANONICAL: `https://${req.get("host")}${req.baseUrl}`,
					data_location: `'${JSON.stringify({ ip: req.ip, userAgent: req.headers["user-agent"] })}'`,
				},
			})
		})
		.catch((err) => next())
})

function getTitle(page) {
	page = page.split(".")[0]
	switch (page) {
		case "privacy":
			return "PRIVACY"
		case "cookies_policy":
			return "COOKIES_POLICY_TEXT_LINK"
		case "terms":
			return "TERMS_CONDITIONS"
		case "about":
			return "ABOUT_US"
		case "gdpr":
			return "DATA_PROTECTION_LINK"
		case "rules":
			return "RULES_REGULATIONS"
		case "canxprotect":
			return "CANCELLATION"
		case "luggage_allowance":
			return "BAGGAGE_ALLOWANCE"
		case "sitemap":
			return "SITE_MAP"
		default:
			return null
	}
}

function createSiteMap(titles, fallBack, lang, languages) {
	languages = languages.filter((item) => item.length === 2)
	const colSize = Math.ceil(languages.length / 4) + 1
	const find = (word) => (titles[word] && titles[word] !== "null" ? titles[word] : fallBack[word])
	const findName = (code) => {
		const result = countries.find((item) => item.code.toLowerCase() === code)

		return result ? result.reach("name", "") : ""
	}

	createList = (array) =>
		array
			.map((item) => {
				if (findName(item)) {
					return `<a class="d-block" href="/${item}"><img src="/images/flags/${item}.gif" /> ${findName(
						item
					)}</a>`
				}
			})
			.join("")

	const string = `
    <h1>${find("SITE_MAP")}</h1>
    <ul style="padding-left: 40px">
      <li>
        <a href="./" style="font-weight:bold; color:var(--shadow)">${find("SEARCH_ROUND_WORLD_FLIGHTS")}</a>
      </li>
      <li>
        <a href="./all-countries.html" style="font-weight:bold; color:var(--shadow)"
        >${find("FLIGHTS_TO_COUNTRIES")}</a
        >
      </li>
      <li style="font-weight:bold; color:var(--shadow)">${find("USEFUL_LINKS")}</li>
      <ul style="padding-left: 40px">
        <li><a href="./about.htm">${find("ABOUT_US")}</a></li>
        <li><a href="./terms.htm">${find("TERMS_CONDITIONS")}</a></li>
        <li><a href="./privacy.htm">${find("PRIVACY")}</a></li>
        <li><a href="./rules.htm">${find("RULES_REGULATIONS")}</a></li>
        <li><a href="./cookies_policy.htm">${find("COOKIES_POLICY_TEXT_LINK")}</a></li>
        <li><a href="./gdpr.htm">${find("DATA_PROTECTION_LINK")}</a></li>
        <li><a href="./canxprotect.htm">${find("CANCELLATION")}</a></li>
      </ul>
    </ul>

    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-md-3">
          <div>${createList(languages.slice(0, colSize))}</div>
        </div>
        <div class=" col-sm-4 col-md-3">
          <div>${createList(languages.slice(colSize, colSize * 2))}</div>
        </div>
        <div class="col-sm-4 col-md-3">
          <div>${createList(languages.slice(colSize * 2, colSize * 3))}</div>
        </div>
        <div class="col-sm-4 col-md-3">
          <div>${createList(languages.slice(colSize * 3))}</div>
        </div>
      </div>
	`

	return `<div>${string}</div>`
}

module.exports = app