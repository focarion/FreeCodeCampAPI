var express = require('express');
var app = express();

app.get("/", function(req, res) {
    app.use("/public", express.static(__dirname + "/public"));
  });

































 module.exports = app;
