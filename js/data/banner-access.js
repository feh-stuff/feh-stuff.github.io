'use strict';

let data = require('./banner-data.js');

exports.getAllBanners = function() {
  return data;
};

exports.getFirstBanner = function() {
  return data[0].banners[0];
};
