const { ipProvider1, ipProvider2, readJson } = require("../../../functions")
const { join } = require("path")

const r = {}

// a global to store the last request for ip repeatedly
var lastIpReqTime = Date.now()

r.ip = async ({ ip, refetch }, options) => {
	if (refetch === false) {
		const fileName = ip.match(/^\d+/g)[0]

	return	readJson(join("data", "ip", fileName + ".json"))
			.then(res => { 
				if(!res) return sendIpRequest(ip)
				return res[ip]	? res[ip] : sendIpRequest(ip)
			}) 
			.catch(err => console.log(err))
	}
	else return sendIpRequest(ip)

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