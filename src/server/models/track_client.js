const mongoose = require("mongoose")

const Schema = mongoose.Schema

const trackClient = new Schema(
	{
		json: [
			{
				json: String,
				date: Date
			}
		]
	},
	{ timestamps: true }
)

module.exports = mongoose.model("TrackClient", trackClient)