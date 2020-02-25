const mongoose = require("mongoose")

const Schema = mongoose.Schema

const trackClient = new Schema(
	{
		json: [
			{
				json: String,
				date: {
					type: Date,
					default: Date.now()
				}
			}
		]
	},
	{ timestamps: true }
)

module.exports = mongoose.model("TrackClient", trackClient)