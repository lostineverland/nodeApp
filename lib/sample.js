'use strict';

exports = module.exports;

exports.you2me = function (str) {
  var re = /you/g;
  return str.replace(re, 'me');
}