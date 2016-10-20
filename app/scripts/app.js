global.jQuery = require('jquery');
global.$ = global.jQuery;
global.Tether = require('tether');
require('bootstrap');

function init() {
  let script;

  const currentPage = $($('.container')[1]).data('page');
  switch (currentPage) {
    case 'home':
      script = require('./lib/home.js');
      break;
    case 'contact':
      script = require('./lib/contact.js');
      break;
  }

  script.init();
}

$(document).ready(init);
