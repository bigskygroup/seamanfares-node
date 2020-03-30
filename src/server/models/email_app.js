const mongoose = require("mongoose")

const Schema = mongoose.Schema

const emailAppSchema = new Schema(
	{
		emailType: {	type: String, required : true},
		email: {	type: String, lowercase: true},
		firstName: {	type: String},
		order: {	type: String},
		lastName: {type:String},
		lang: {type:String },
		clientId: {type:String },
		emailSent: {type:Boolean, required: true, default: false}
	},
	{ timestamps: true }
)

module.exports = mongoose.model("emailApp", emailAppSchema)