/************************************************
 * (comment header for organization purposes only)
 * Author: Alex J. Baker
 * Name: routes.js
 * For: Team Activity 01 Teacher's Solution
 * Description: This is part of the solution
 * example for the Team Activity of Week 01
 * in CSE341. This is the file containing the
 * logic for handling requests to localhost:3000
 ************************************************/

// Local variable of activities to be looped through for display on '/activities'
const activities = ['soccer', "basketball", "football", "swimming"];

// The FS library is important for Stretch 02
const fs = require('fs');

const requestHandler = (req, res) => {
    // Storing url and method in const variables as they will not be modified
    // It's also convenient to "destructure" your names.
    const url = req.url;
    const method = req.method;

    // Request handling
    // CORE CHALLENGE 1 -
    if (url === '/') {
        // HTML page is written
        res.write('<html>');
        res.write('<head><title>Hello Browser!</Title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to my world!</h1>');
        // navigation to your activities endpoint.
        res.write('<a href="./activities">Activities List</a></br>');
        // These are navigation links for the stretch challenges
        res.write('<a href="./stretch-1">Stretch 1 (CSS)</a></br>');
        res.write('<a href="./stretch-2">Stretch 2 (Write Form input to text input)</a></br>');
        res.write('<a href="./stretch-3">Stretch 3 (Add two number inputs together)</a></br>');
        res.write('</body>');
        res.write('</html>');
        return res.end(); // Return so you don't execute remaining code outside of if statement
    }
    // CORE CHALLENGE 2 -
    if (url === '/activities') {
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        // Loop through activities using for...of loop to display the list
        for (const activity of activities) {
            res.write(`<li>${activity}</li>`);
        }
        res.write('</ul>');
        // Form for "./add-activity".
        res.write('<form action="./add-activity" method="POST">');
        res.write('<input type="text" name="newActivity">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        // End tags
        res.write('</body>');
        res.write('</html>');
        return res.end(); // Return so you don't execute remaining code outside of if statement
    }
    // CORE CHALLENGE 3 -
    if (url === "/add-activity" && method === 'POST') {
        // Handle post request
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const newActivity = parsedBody.split('=')[1];
            // Console log seen in terminal, may be encoded, but isn't important for now
            console.log(newActivity);

            // Remain on './activities' url.
            res.writeHead(302, {'Location': '/activities'});
            res.end();
        });
    }
    /***************************************************************************
    * STRETCH CHALLENGE SOLUTIONS
    * These are the solutions for the stretch challenges.
    ***************************************************************************/
    // STRETCH CHALLENGE 1 - Add CSS.
    if (url === "/stretch-1") {
      // This will be fairly similar to any HTML page, but have internal CSS
      // This is not the only way to do it. In fact, you can link external CSS
      // with some more work. (hint: look up serving static pages, or Express,
      // which we'll be using in the future.)
      res.write('<html>');
      res.write('<head><title>Hello Browser!</Title>');
      // Really basic styling with some pizzazz....
      res.write('<style>');
      res.write('body { background-image: linear-gradient('
               +'to left, violet, indigo, blue, green, yellow, orange, red); color: White}');
      res.write('</style>');
      res.write('</head>');
      res.write('<body>');
      res.write('<h1>Welcome to my world, now in color!</h1>');
      res.write('</body>');
      res.write('</html>');

      return res.end();
    }
    // STRETCH CHALLENGE 2 - Write to file.
    if (url === "/stretch-2" && method !== 'POST') {
      // You will either need to name your post request differently, or
      // determine whether it is a POST request or not with another bool operator.
      // No post request, just write the form page...
      res.write('<html>');
      res.write('<body>');
      // Form for "./stretch-2 POST request".
      res.write('<form action="./stretch-2" method="POST">');
      res.write('<input type="text" name="message">');
      res.write('<button type="submit">Submit</button>');
      res.write('</form>');
      // End tags
      res.write('</body>');
      res.write('</html>');
      return res.end(); // Remember to end the response!
    }
    // The url can be identical
    if (url === "/stretch-2" && method === 'POST') {
      console.log('Post request!');
      const body = [];
      req.on('data', (chunk) => {
          body.push(chunk);
      });

      return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          console.log(message);
          fs.writeFile('stretch2.txt', message, err => {
              res.writeHead(302, {'Location': '/'}); // Redirect
              return res.end();
          });
      });
    }
    // STRETCH CHALLENGE 3 - Add two numbers...
    if (url === "/stretch-3" && method !== 'POST') {
      // Same routine from stretch-2 on the POST requests...
      res.write('<html>');
      res.write('<body>');
      // Form for "./stretch-2 POST request".
      res.write('<form action="./stretch-3" method="POST">');
      res.write('<input type="number" name="op1">+');
      res.write('<input type="number" name="op2">');
      res.write('<button type="submit">Submit</button>');
      res.write('</form>');
      // End tags
      res.write('</body>');
      res.write('</html>');
      return res.end(); // Remember to end the response!
    }
    if (url === "/stretch-3" && method === 'POST') {
      console.log('Post request!');
      const body = [];
      req.on('data', (chunk) => {
          body.push(chunk);
      });
      console.log(body);

      return req.on('end', () => {
          // A let is appropriate here because we'll be modifying it.
          let parsedBody = Buffer.concat(body).toString();
          parsedBody = parsedBody.split('&'); // Seperate key-val pairs
          const values = []; // Array to store retrieved values.
          for (let key_val_pair of parsedBody) {
            console.log('KeyVal pair: ' + key_val_pair);
            values.push(key_val_pair.split('=')[1]); // Push value into array.
          }

          // You will need to use JS' parseInt to convert the variable from type
          // string to number, otherwise they will concat like a string.
          // e.g. 11+15 will log a string of '1115'.
          console.log(parseInt(values[0]) + parseInt(values[1])); // Console log the sum
          res.writeHead(302, {'Location': '/'}); // Redirect to home
          return res.end();
      });
    }

    // This is the default given the url did not match any routes
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Non-existant route</Title></head>');
    res.write('<body><h1>This url has no purpose or route handling</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;
