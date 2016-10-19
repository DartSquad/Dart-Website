global.jQuery = require('jquery');
global.$ = global.jQuery;
global.Tether = require('tether');
require('bootstrap');

function init() {
  const homeMap = require('./lib/home.js');
  homeMap.init();
}

$(document).ready(init);
