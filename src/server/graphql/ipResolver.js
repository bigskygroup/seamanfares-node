const { ipProvider1, ipProvider2, readJson } = require("../../../functions")
const { join } = require("path")
const IP = require("../models/ip")

const r = {}

// a global to store the last request for ip repeatedly
var lastIpReqTime = Date.now()

r.ip = async ({ ip, refetch }, options) => {  console.log(ip, typeof ip)

	const [part1, part2, part3, part4] = ip.match(/\d+/g)
	return IP.find({ part1: part1 }).then(async res => {
		if (!res.length) {
			const result = await sendIpRequest(ip)
			const newIP = new IP(ipConstructor(part1, part2, part3, part4, result))
			return newIP.save().then(res => result)
		} else {
			if (!res[0].rest[part2]) {
				const result = await sendIpRequest(ip)
				const newRest = { ...res[0].rest, ...ipConstructor(null, part2, part3, part4, result) }
				return IP.updateOne({ _id: res[0]._id }, { rest: newRest }).then(res => result)
			} else {
				if (!res[0].rest[part2][part3]) {
					const result = await sendIpRequest(ip)
					const newRest = Object.assign(res[0].rest[part2], ipConstructor(null, null, part3, part4, result))
					return IP.updateOne({ _id: res[0]._id }, { rest: res[0].rest }).then(res => result)
				} else {
					if (!res[0].rest[part2][part3][part4]) {
						const result = await sendIpRequest(ip)
						const newRest = Object.assign(
							res[0].rest[part2][part3],
							ipConstructor(null, null, null, part4, result)
						)
						return IP.updateOne({ _id: res[0]._id }, { rest: res[0].rest }).then(res => result)
					}
					return res[0].rest[part2][part3][part4]
				}
			}
		}
	})
}

r.isGodIP = ({ ip }) => {
	const ipGods = [
		"82.209.195.19",
		"82.209.195.27",
		"178.124.187.77",
		"82.209.194.15",
		"::1",
		"127.0.0.1",
		"178.124.172.174",
		"139.162.234.140",
		"90.74.0.167",
		"139.162.248.82"
	]
	if (ipGods.includes(ip)) return {result :true}
		else return {result :false}
}

function ipConstructor(part1, part2, part3, part4, result) {
	if (part1 && part2 && part3 && part4) {
		console.log("all parts exist")
		const obj = {
			part1: part1,
			rest: {}
		}
		obj.rest[part2] = {}
		obj.rest[part2][part3] = {}
		obj.rest[part2][part3][part4] = result
		return obj
	} else if (part2 && part3 && part4) {
		const obj = {}
		obj[part2] = {}
		obj[part2][part3] = {}
		obj[part2][part3][part4] = result
		return obj
	} else if (part3 && part4) {
		const obj = {}
		obj[part3] = {}
		obj[part3][part4] = result
		return obj
	} else if (part4) {
		const obj = {}
		obj[part4] = result
		return obj
	}
}

function sendIpRequest(ip) {
	if (Date.now() - lastIpReqTime > 510) {
		// console.log("ipProvider1 called")
		lastIpReqTime = Date.now()
		return ipProvider1(ip)
	} else {
		// console.log("ipProvider2 called") //
		return ipProvider2(ip)
	}
}

module.exports = r