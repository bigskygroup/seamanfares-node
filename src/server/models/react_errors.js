const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema(
	{
		log: String,
		trackingId : String
	},
	{ timestamps: true }
)

module.exports = mongoose.model("React_errors", userSchema)