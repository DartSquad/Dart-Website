global.GoogleMapsLoader = require('google-maps');

const GoogleMapsLoader = global.GoogleMapsLoader;

function setProductInformation() {
  $.get('https://json-data.herokuapp.com/darts/info')
    .done(data => {
      $('.product-info > h2').html(data.data.product.title);
      $('.product-info > p').html(data.data.product.description);
    });
}

function setUserTestimonials() {
  $.get('https://json-data.herokuapp.com/darts/testimonials')
    .done(testimonials => {
      const profiles = $('.profiles');
      const profilePictures = $('.profile-picture');
      const profileNames = profiles.find('h3');
      const profileTestimonials = profiles.find('p');

      for (let index = 0; index < 3; index++) {
        if (index != 2) {
          $.get('https://api.randomuser.me/?gender=female')
            .done(profile => {
              $(profilePictures[index]).attr('src', profile.results[0].picture.large);
              $(profileNames[index]).html(testimonials.results[index].name);
              $(profileTestimonials[index]).html(testimonials.results[index].review);
            });
        } else {
          $.get('https://api.randomuser.me/?gender=male')
            .done(profile => {
              $(profilePictures[index]).attr('src', profile.results[0].picture.large);
              $(profileNames[index]).html(testimonials.results[index].name);
              $(profileTestimonials[index]).html(testimonials.results[index].review);
            });
        }
      }
    });
}

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

function init() {
  GoogleMapsLoader.KEY = 'AIzaSyBZjNKYJzp1VU407Gah8uOUVHZjC7jLX1U';

  setProductInformation();
  setUserTestimonials();
  renderMap();
}

module.exports.init = init;
