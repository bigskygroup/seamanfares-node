const fs = require("fs")
const f = {}

f.readContentOf = function(path) {
 return fs.readFile(path, "utf8",  (err, data) =>{
 	if(err) console.log(err)
 		return data
 })
}

f.ofType = function() {

}














module.exports = f