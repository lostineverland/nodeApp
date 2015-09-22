'use strict';
var express = require('express'),
  path = require('path'),
  settings = require('config'),
  bodyParser = require('body-parser'),
  transcribe = require('./lib/sample');

var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('simple server');
});

app.use(express.static(path.join(__dirname, 'static')));
app.use('/sample', express.static(path.join(__dirname, 'apps/sample')));
app.post('/sample-trans', 
  function (req, res) {
    console.log('transcribe got: ', req.body);
    console.log('transcribe put: ', {phrase: transcribe.you2me(req.body.phrase)});
    res.json({phrase: transcribe.you2me(req.body.phrase)});
  }
);

var server = app.listen(settings.node.port, function() {
    console.log('Listening on port %d', server.address().port);
});