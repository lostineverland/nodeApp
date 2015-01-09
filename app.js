'use strict';
var express = require('express'),
  getName = require('./lib/dbAccess').getName;

var app = express();

app.all('/hello.txt', function(req, res){
  res.send(getName());
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});