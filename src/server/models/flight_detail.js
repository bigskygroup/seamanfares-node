const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema(
	{
		log: String
	},
	{ timestamps: true }
)

module.exports = mongoose.model("Flight_detail", userSchema)