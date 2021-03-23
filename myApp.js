var express = require('express');
var app = express();

app.get("/", function(req, res) {
    app.use(express.static(__dirname + "/public"));
    app.use("/public", express.static(__dirname + "/public"));
    res.sendFile(__dirname + '/views/index.html');

  });

































 module.exports = app;
