const express = require("express")
const app = express.Router()

app.get("/test" , (req,res) => {
	res.send("testing")
})





















module.exports = app