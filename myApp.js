var express = require('express');
var app = express();
require('dotenv').config()

var message = {"message":"Hello json"}

    if (process.env.MESSAGE_STYLE === "uppercase") {
       message.message = message.message.toUpperCase();
    }

app.get("/json", (req, res) => {
    res.json(response);
  });


































 module.exports = app;
