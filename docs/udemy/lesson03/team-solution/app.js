const fs = require("fs");
const ejs = require("ejs");

const express = require("express");
var jsonEngine = require('./jsonEngine.js');
var app = express();

// web server setup
app.set('port', process.env.PORT || 5000)
  .use(express.static(__dirname + '/public'))
  .set('views', __dirname + '/views')
  .set('view engine', 'ejs')
  .get('/', jsonEngine.processJson)
  .listen(app.get('port'), function() {
  	console.log('Listening on port: ' + app.get('port'));
  });

