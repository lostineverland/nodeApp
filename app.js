'use strict';
var express = require('express'),
  path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.get('/', function(req, res){
  res.send('simple server');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});