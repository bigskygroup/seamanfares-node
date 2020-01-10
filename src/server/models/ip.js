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


module.exports = mongoose.model("IP", ipSchema)