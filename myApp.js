var express = require('express');
var app = express();
if (process.env.MESSAGE_STYLE === "uppercase") {
    response = "Hello Json".toUpperCase();
  } else {
    response = "Hello Json";
  }
app.get("/json", (req, res) => {
    res.json({
      message: this.response
    });
  });

































 module.exports = app;
