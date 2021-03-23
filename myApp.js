var express = require('express');
var app = express();
require('dotenv').config()

var absolutePath = __dirname + "/views/index.html"
   app.get("/", (req, res) => {res.sendFile(absolutePath)})

    app.use(express.static(__dirname + "/public"));

    var message = {"message":"Hello json"}

    if(process.env.MESSAGE_STYLE==='uppercase'){

        //  response = "Hello json".toUpperCase();
        response = "Hello json".toUpperCase();
         
       }
       else{
         response = "Hello json";
       }
    app.get("/json", (req, res) => {
    res.json(message)
    })

































 module.exports = app;
