const mongoose = require("mongoose")

const Schema = mongoose.Schema

const siteFailSchema = new Schema(
	{
		fileName : { type: String, required: true, default: "" },
		total: { type: Number, required: true, default: 0 },
		startIndex: { type: Number, required: true, default: 0 },
		control: [],
		failSample: []
	},
	{ timestamps: true }
)

module.exports = mongoose.model("siteFail", siteFailSchema)