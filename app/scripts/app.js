global.jQuery = require('jquery');
global.$ = global.jQuery;
global.Tether = require('tether');
require('bootstrap');

function init() {
  const home = require('./lib/home.js');
  home.init();
}

$(document).ready(init);
