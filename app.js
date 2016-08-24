// express is a framework

var groceries = require('./groceries');
// acesssesing object in procereies.js

var express = require('express');
// accessing express in node modules

var app = express();

// waiting to recieve the git request on /
app.get('/', function (request, response, next) {
  response.send('Hello World');
  // parameter request is sent in and we send hello world to dom
});

// waiting to recieve the git request on /vegetables
app.get('/vegetables', function (req, response, next) {

  req.send(groceries.vegetables.join(', '));
  // parameter req is sent in and we send the groceres as a string to the dom
});

app.listen(8000);
// server listening on port 8000
