var express = require('express');
var app = express();
require('dotenv').config()
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function middleware(req, res, next) {
   console.log(req.method + " " + req.path + " - " + req.ip);
   next();
 });



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

app.get(
   "/now",
   (req, res, next) => {
     req.time = new Date().toString();
     next();
   },
   (req, res) => {
     res.send({
       time: req.time
     });
   }
 );

 app.get("/:word/echo", (req, res) => {
   const { word } = req.params;
   res.json({
     echo: word
   });
 });

 app.get("/name", function(req, res) {
   var firstName = req.query.first;
   var lastName = req.query.last;

   var { first: firstName, last: lastName } = req.query;

   res.json({
     name: `${firstName} ${lastName}`
   });
 });
 
 app.post("/name", function(req, res) {

   var string = req.body.first + " " + req.body.last;
   res.json({ name: string });
 });































 module.exports = app;
