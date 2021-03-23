var express = require('express');
var app = express();

app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
  });

































 module.exports = app;
