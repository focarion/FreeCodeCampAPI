var express = require('express');
var app = express();
require('dotenv').config()

var response

if (process.env.MESSAGE_STYLE === "uppercase") {
    response = "Hello Json".toUpperCase();
  } else {
    response = "Hello Json";
  }

app.get("/json", (req, res) => {
    res.json({
      message: response
    });
  });


































 module.exports = app;
