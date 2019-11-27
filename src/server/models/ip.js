const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ipSchema = new Schema(
	{
		part1: String,
		rest: {
			type: Schema.Types.Mixed,
			required: true
		}
	},
	{ timestamps: true }
)

// const ipSchema = new Schema(
// 	{
// 		id: {
// 			type: String,
// 			required: true
// 		},
// 		latitude: String,
// 			longitude: String,
// 			city: String,
// 			city2: String,
// 			country: String,
// 			error: String	,
// 	},
// 	{ timestamps: true }
// )

module.exports = mongoose.model("IP", ipSchema)