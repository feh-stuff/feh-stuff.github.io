'use strict';

let data = require('./banner-data.js');
let rates = require('./banner-rates-data.js');

data.forEach(d => {
  d.banners.forEach(banner => {
    banner.rates = rates[banner.rateType];
  });
});

exports.getAllBanners = function() {
  return data;
};

exports.getFirstBanner = function() {
  return data[0].banners[0];
};
