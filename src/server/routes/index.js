const express = require('express');
const app = express.Router();
const babel = require("babel-register")
const React = require("react")
const ReactDOMServer = require("react-dom/server")

require('babel-register')({
  presets: [ 'react' ]
})

const Component =  require("../../client/component.js") 

app.get('/', function(req, res, next) {
	 const reactHTML = ReactDOMServer.renderToString(Component())
console.log(reactHTML)
	res.render('index', { 
		title: 'Express', 
		react: reactHTML 
	});
});

module.exports = app;
