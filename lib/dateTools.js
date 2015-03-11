'use strict';
var moment = require('moment'),
  _ = require('lodash');
require('twix');

exports = module.exports;

var momentIntervals = {
  month: {interval: 'months', format: 'YYYY-MM'},
  // week: {interval: 'weeks', format: 'GGGG-[W]WW'},
  day: {interval: 'days', format: 'YYYY-MM-DD'},
  hour: {interval: 'hours', format: 'YYYY-MM-DDTHH'}
};

function generateDateIntervals (startDate, inclusiveEndDate, interval) {
  // from legacy, this uses inclusive end dates, it is up-to the client to cull
  var intervals = [];
  var fromMoment = moment.utc(startDate);
  var toMoment = moment.utc(inclusiveEndDate);
  var dates = fromMoment.twix(toMoment).iterate(momentIntervals[interval].interval);

  while (dates.hasNext()) {
    intervals = intervals.concat(dates.next().format(momentIntervals[interval].format));
  }
  return intervals;
}

exports.generateDateIntervals = generateDateIntervals;