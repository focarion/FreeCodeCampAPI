var express = require('express');
var app = express();
require('dotenv').config()

var absolutePath = __dirname + "/views/index.html"
   app.get("/", (req, res) => {res.sendFile(absolutePath)})

    app.use(express.static(__dirname + "/public"));


    if(process.env.MESSAGE_STYLE==='uppercase'){

        message = "Hello json".toUpperCase();
         
       }
       else{
         message = "Hello json";
       }
    app.get("/json", (req, res) => {
    res.json({"message": message})
    })

































 module.exports = app;
