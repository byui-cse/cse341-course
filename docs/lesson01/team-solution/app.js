/************************************************
 * (comment header for organization purposes only)
 * Author: Alex J. Baker
 * Name: app.js
 * For: Team Activity 01 Teacher's Solution
 * Description: This is part of the solution
 * example for the Team Activity of Week 01
 * in CSE341. This is the main file for execution
 ************************************************/

// For this, we'll be slightly emulating the Udemy course and
// using an imported function from './routes.js'
const http = require('http');

const routeHandler = require('./routes');

const server = http.createServer(routeHandler);

console.log('Listening on 3000!');

server.listen(3000);

// Run the file in the terminal using "node app.js" OR
// "nodemon app.js" (if you've installed nodemon globally with npm)
