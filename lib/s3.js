'use strict';
var settings = require('config'),
  fs = require('fs'),
  AWS = require('aws-sdk');

AWS.config.region = settings.AWS.region;

function pushKeyVal (bucket, key, val) {
  // body...
}