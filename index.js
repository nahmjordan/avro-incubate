var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var router = express.Router();
var app = express();

var publicDir = path.join(__dirname, 'public');// '../',

module.exports = router;

app.use(express.static("public"));

//app.use(favicon(path.join(publicDir, '/style/')));