const http = require("http");

function processJson(req, res) {
      
   // read json
   var url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

   http.get(url, function(response){
      var body = '';

      response.on('data', function(chunk){
         body += chunk;
      });

      response.on('end', function(){
         var jsonResponse = JSON.parse(body);
         // console.log("Got a response: ", jsonResponse);
         var stuff = {data:jsonResponse}

         res.render('results', stuff);

         // var outputFilename = 'my.json';

         //    fs.writeFile(outputFilename, JSON.stringify(jsonResponse, null, 4), function(err) {
         //       if(err) {
         //          console.log(err);
         //       } else {
         //          console.log("JSON saved to " + outputFilename);
         //       }
         //    }); 
      });
   }).on('error', function(e){
         console.log("Got an error: ", e);
   });
}

module.exports = {processJson: processJson};