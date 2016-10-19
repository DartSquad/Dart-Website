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
      zoom: 12,
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

function displayProfilePictures(profiles) {
  const profilePictures = $('.profiles').find('.profile-picture');

  for (let index = 0; index < 3; index++) {
    $(profilePictures[index]).attr('src', profiles[index].picture.large);
  }
}

function displayProfileNames(profiles) {
  const profileNames = $('.profiles').find('h3');

  for (let index = 0; index < 3; index++) {
    const firstName = profiles[index].name.first.charAt(0).toUpperCase() + profiles[index].name.first.slice(1);
    const lastName = profiles[index].name.last.charAt(0).toUpperCase() + profiles[index].name.last.slice(1);

    $(profileNames[index]).html(`${firstName} ${lastName}`);
  }
}

function getProfiles() {
  $.get('https://randomuser.me/api/?results=3')
    .done(data => {
      displayProfilePictures(data.results);
      displayProfileNames(data.results);
    });
}

function init() {
  GoogleMapsLoader.KEY = 'AIzaSyBZjNKYJzp1VU407Gah8uOUVHZjC7jLX1U';

  getProfiles();
  renderMap();
}

module.exports.init = init;
