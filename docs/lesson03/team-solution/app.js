/* To run this file after downloading, run the following commands:
    npm install fs
    npm install ejs
    npm install express
    node app.js"
*/

const fs = require("fs");
const ejs = require("ejs");

const express = require("express");
var jsonEngine = require('./jsonEngine.js.js');
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

