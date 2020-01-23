const { CRYPTO_KEY } = require("../../../config.js")
const CryptoJS = require("crypto-js")

const r = {}
// const encryptedString = decodeURIComponent(
// 	"mBxS%2B3rVvwH6%2BBlfqs0ln06lIKQmCENi0NFXhNJB9CyUXVHqMyHTzh3PiBSYsbMaClM0VldoRVJ5uBHXEPcA0HiDOKQ%2FLaFA9n%2FPEUpL%2B%2Bs%3D"
// )
// const string2 =
// 	"mBxS%2B3rVvwH6%2BBlfqs0ln06lIKQmCENi0NFXhNJB9CyUXVHqMyHTzh3PiBSYsbMaClM0VldoRVJ5uBHXEPcA0HiDOKQ%2FLaFA9n%2FPEUpL%2B%2Bs%3D"

r.decrypt = ({ string }) => {
	const key = CryptoJS.enc.Utf8.parse(CRYPTO_KEY)
	const iv = CryptoJS.enc.Hex.parse("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0")
	const decryptedCode = CryptoJS.AES.decrypt(string, key, {
		iv: iv,
		mode: CryptoJS.mode.CBC
	}).toString(CryptoJS.enc.Utf8)

	return decryptedCode
}

module.exports = r