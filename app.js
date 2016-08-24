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

// http http://localhost:8000/hello?friend=tommy this is to be pasted in terminal

app.get('/hello', function(req, res, next) {
  console.log(req.query);
  res.send();
});

app.get('/vegetables', function(req, res, next) {
  console.log(req.query);

  var veggieString = groceries.vegetables.toString();

  if (req.query.search) {
    function find(index) {

      var veggieString = index.toString();
      veggieString = veggieString.toLowerCase();

      if (veggieString.includes(req.query.search.toLowerCase())) {
        return true;
      }
    }

    console.log(groceries.vegetables.filter(find).join(', '));
    res.send(groceries.vegetables.filter(find).join(', '));
  }

  else {
    res.send(groceries.vegetables.join(', '));
  }
})



// waiting to recieve the git request on /vegetables
app.get('/vegetables', function (request, res, next) {

  res.send(groceries.vegetables.join(', '));
  // parameter req is sent in and we send the groceres as a string to the dom
});

app.get('/vegetables/:id', function (request, res, next) {

  var veggieValid = groceries.vegetables[request.params.id] || 'Not Found';

  res.send(veggieValid);
});

app.get('/hello/:key/:key2', function(req, res, next) {
  console.log(req.params);

  res.status(202).send('hi ' + req.params.key + ' and ' + req.params.key2);
});

var friends = [];
app.post('/friends', function (req, res, next) {
  var body = [];
  req.on('data', function (chunk) {
    body.push(chunk.toString());
  }).on('end', function () {
    var data = JSON.parse(body.join(''));
    friends.push(data)
    res.status(201).send(friends);
  });
});

app.listen(8000);
// server listening on port 8000
