global.GoogleMapsLoader = require('google-maps');

const GoogleMapsLoader = global.GoogleMapsLoader;

function renderMap() {
  const target = {
    lat: 39.1053073,
    lng: -84.5121242
  };

  GoogleMapsLoader.load(google => {
    const map = new google.maps.Map($('.google-map')[0], {
      center: target,
      zoom: 16,
      disableDefaultUI: true,
      disableDoubleClickZoom: true,
      scrollwheel: false
    });

    new google.maps.Marker({
      position: target,
      map
    });
  });
}

function init() {
  GoogleMapsLoader.KEY = 'AIzaSyBZjNKYJzp1VU407Gah8uOUVHZjC7jLX1U';

  renderMap();
}

module.exports.init = init;
