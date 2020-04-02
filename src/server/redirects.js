const express = require("express")
const app = express.Router()

// REDIRECT PATTERNS
const trip_lang_city1_city2 = /^\/trip-([a-z]{2})-([a-z]{3})\+{1,2}[^-]+-([a-z]{3}).+/i
//eg: /trip-fi-BJA++bejaia-ORY+pariisi+orly-ORY-BJA-281119.99.2.0.0.1.051219.99

const trip_lang_city1_city2_with_space = /^\/trip-([a-z]{2})-([a-z]{3})[^-]+-([a-z]{3}).+/i
//eg: /trip-no-BCN barcelona-LAX los angeles ca international-LAX-BCN-060816.99.2.1.0.0.250816.99

const one_lang_city1_city2 = /^\/one-([a-z]{2})-([a-z]{3})[^-]+-([a-z]{3}).+/i
//eg: /one-gb-SAO sao paulo-SCL santiago de chile-210918.99.1.0.0.0

const with_dash = /^\/-([a-z]{2})-([a-z]{3})-([a-z]{3}).+/i
//eg:/-ae-sto-orw-stockholm-ormara-airport.html

const trip_to_viewtrip = /^\/trip\/get\.php/i
//eg: /trip/get.php?rnumber=BK2JWT&tname=Kimes&lang=en
 
app.get(trip_lang_city1_city2, (req, res) => {
	const dissect = req.originalUrl.match(trip_lang_city1_city2)
	const lang = dissect[1]
	const fromCity = dissect[2]
	const toCity = dissect[3]
	res.redirect(`/${lang}-${fromCity}-${toCity}-.html`)
})
app.get(trip_lang_city1_city2_with_space, (req, res) => {
	const dissect = req.originalUrl.match(trip_lang_city1_city2_with_space)
	const lang = dissect[1]
	const fromCity = dissect[2]
	const toCity = dissect[3]
	res.redirect(`/${lang}-${fromCity}-${toCity}-.html`)
})
app.get(one_lang_city1_city2, (req, res) => {
	const dissect = req.originalUrl.match(one_lang_city1_city2)
	const lang = dissect[1]
	const fromCity = dissect[2]
	const toCity = dissect[3]
	res.redirect(`/${lang}-${fromCity}-${toCity}-.html`)
})

app.get(with_dash, (req, res) => {
	const dissect = req.originalUrl.match(with_dash)
	const lang = dissect[1]
	const fromCity = dissect[2]
	const toCity = dissect[3]
	res.redirect(`/${lang}-${fromCity}-${toCity}-.html`)
})

app.get("/support", (req, res) => {
	res.redirect("https://support.sky-tours.com/en")
})

app.get(trip_to_viewtrip, (req, res) => {
	const { rnumber, tname, lang } = req.query
	res.redirect(`https://viewtrip.sky-tours.com/get.php?rnumber=${rnumber}&tname=${tname}&lang=${lang}`)
})

module.exports = app