var express = require('express');
var app = express();
require('dotenv').config()

var response = {"message":"Hello json"}

if (process.env.MESSAGE_STYLE === "uppercase") {
    response.message = response.message.toUpperCase();
  } else {
    response.message = response.message;
  }

app.get("/json", (req, res) => {
    res.json(response);
  });


































 module.exports = app;
