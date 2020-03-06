const { join } = require("path")
const fs = require("fs")
const { Readable } = require("stream")
const util = require("util")
const { createStream, readFolderFiles } = require("../../../functions")
const fetch = require("node-fetch")

const Flights_data = require("../models/flights_data")
const Flight_detail = require("../models/flight_detail")
const Customer = require("../models/customer")
const React_errors = require("../models/react_errors")
const Track_client = require("../models/track_client")

const r = {}

r.timeOnServer = () => new Date().toString()

r.printConsole = async ({ count = 50 }) => {
	const content = await createStream(join("data", "logs", "console.log"), "read")
	if (typeof Number(count) !== "number") return { logs: [`wrong ${count.toString()} parameter in the query`] }

	return {
		logs: content
			.split(/\n/g)
			.slice(-1 * count)
			.reverse()
	}
}

r.printErrors = async ({ count = 50 }) => {
	const content = await createStream(join("data", "logs", "err.log"), "read")

	if (typeof Number(count) !== "number") return { logs: [`wrong ${count.toString()} parameter in the query`] }

	return {
		logs: content
			.split(/\n/g)
			.slice(-1 * count)
			.reverse()
	}
}

r.printLogsDates = async ({ count }) => {
	const result = await readFolderFiles(join("data", "logs", "morgan")).then(res => {
		res = res.filter(item => /^[\d-]+\.log$/.test(item))
		res = res.length > count ? res.slice(-1 * count) : res
		return res.map(item => {
			const digits = item.match(/\d+/g)
			const obj = {
				month: digits[0],
				day: digits[1],
				year: digits[2]
			}
			return JSON.stringify(obj)
		})
	})
	return { logs: result }
}

r.printLogs = async ({
	count = 50,
	month = new Date().getMonth() + 1,
	day = new Date().getDate(),
	year = new Date().getFullYear(),
	length = false
}) => {
	const fileName = `${month}-${day}-${year}.log`
	var content
	try {
		content = await createStream(join("data", "logs", "morgan", fileName), "read")
	} catch (err) {
		return { logs: [] }
	}

	if (length) return { logs: [content.split(/\n/g).length.toString()] }

	return {
		logs: content
			.split(/\n/g)
			.slice(-1 * count)
			.reverse()
	}
}

r.captureResponse = ({ type, url }) => {
	if (typeof type !== "string" || typeof url !== "string" || !type.length || !url.length)
		return { error: "type and url must be string" }

	return fetch(url)
		.then(response => response.json())
		.then(async response => {
			log = JSON.stringify(response)
			switch (type) {
				case "flight_details":
					const newLog = new Flight_detail({ log: log })
					await newLog.save()
					return { error: "" }

				default:
					return { error: "The type is not found in switch cases" }
			}

			return { error: "" }
		})
		.catch(err =>
			console.error(
				`in captureResponse in /graphql/logResolver.js >>>> error: ${err} type: ${type} url: ${url}`
			)
		)
}

r.findCustomer = async ({ count = 10, order, email }) => {
	if (order) {
		return Customer.findOne({ order: order })
			.then(result => ({ logs: [result.data] }))
			.catch(err => ({ logs: [] }))
	} else if (email) {
		return Customer.find({ customer_email: email })
			.then(result => ({ logs: result.map(item => item.data) }))
			.catch(err => ({ logs: [] }))
	} else {
		return Customer.find({})
			.then(result => ({
				logs: result
					.map(item => item.data)
					.slice(-1 * count)
					.reverse()
			}))
			.catch(err => ({ logs: [] }))
	}
}

r.reactErrors = async ({ json }) => {
	const trackingId = JSON.parse(json).id
	const now = Date.now()

	const lastHour = now - 1000 * 60 * 60
	const breakPoint = new Date(lastHour).toISOString()
	const alreadyRegisterredError = await React_errors.findOne({ trackingId: trackingId })
		.where("createdAt")
		.gt(breakPoint)
	if (alreadyRegisterredError) {
		return {
			id: trackingId,
			json: json,
			error: "Error already recorded"
		}
	}

	const newError = new React_errors({ log: json, trackingId: trackingId })
	return newError
		.save()
		.then(res => ({
			id: res.id,
			json: res.log,
			error: ""
		}))
		.catch(err => ({
			error: err,
			json: "",
			id: ""
		}))
}

r.trackClient = ({ json }) => {
	try {
		json = JSON.parse(json)
		if (!json.id) {
			const log = new Track_client()
			log.json.push({ json: JSON.stringify(json), date: new Date().toISOString() })
			return log.save().then(res => ({ id: res._id }))
		} else {
			return Track_client.findOne({ _id: json.id })
				.then(res => {
					res.json.push({ json: JSON.stringify(json), date: new Date().toISOString() })
					res.save()
					return { id: res._id }
				})
				.catch(err => {
					json.id = undefined
					return r.trackClient({ json: JSON.stringify(json) })
				})
		}
	} catch (err) {
		return {
			id: err.toString
		}
	}
}

module.exports = r