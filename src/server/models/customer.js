const mongoose = require("mongoose")

const Schema = mongoose.Schema

const customerSchema = new Schema(
	{
		customer_email: {	type: String, lowercase: true},
		customer_name: {	type: String},
		order: {	type: String},
		lname: {type:String , lowercase: true},
		gross_price: {type:String },
		gross_cur: {type:String },
		data: String, // where all the information is stored as json	
		emailSent: {type:Boolean, required: true, default: false}
	},
	{ timestamps: true }
)

module.exports = mongoose.model("Customer", customerSchema)