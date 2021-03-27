var express = require('express');
var app = express();
require('dotenv').config()

var absolutePath = __dirname + "/views/index.html"
   app.get("/", (req, res) => {res.sendFile(absolutePath)})

    app.use(express.static(__dirname + "/public"));


app.get("/json", function(req, res) {
   var Response = { "message": "Hello json"};

   if(process.env.MESSAGE_STYLE === "uppercase") {
      Response.message = Response.message.toUpperCase()
   }
   res.json(Response);
});

































 module.exports = app;
