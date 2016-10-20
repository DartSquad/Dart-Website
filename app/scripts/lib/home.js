global.GoogleMapsLoader = require('google-maps');

const GoogleMapsLoader = global.GoogleMapsLoader;

function setProductInformation() {
  $.get('https://json-data.herokuapp.com/darts/info')
    .done(data => {
      $('.product-info > h2').html(data.data.product.title);
      $('.product-info > p').html(data.data.product.description);
    });
}

function displayUserTestimonials(randomProfiles, testimonials) {
  const profiles = $('.profiles');
  const profilePictures = profiles.find('.profile-picture');
  const profileNames = profiles.find('h3');
  const profileTestimonials = profiles.find('p');


  for (let index = 0; index < 3; index++) {
    $(profilePictures[index]).attr('src', randomProfiles[index].picture.large);
    $(profileNames[index]).html(testimonials[index].name);
    $(profileTestimonials[index]).html(testimonials[index].review);
  }
}

function setUserTestimonials() {
  $.get('https://json-data.herokuapp.com/darts/testimonials')
    .done(testimonials => {
      testimonials = testimonials.results;

      $.get('https://api.randomuser.me/?gender=female&results=2')
        .done(profiles => {
          profiles = profiles.results;

          $.get('https://api.randomuser.me/?gender=male&results=1')
            .done(profile => {
              profiles.push(profile.results[0]);
              displayUserTestimonials(profiles, testimonials);
            });
        });
    });
}

function setCompanyInformation() {
  $.get('https://json-data.herokuapp.com/darts/companies')
    .done(data => {
      const companyImages = $('.company-list').find('.company-logo');
      for (let index = 0; index < 4; index++) {
        $(companyImages[index]).attr('src', data.results[index].image_url);
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
  setCompanyInformation();
  renderMap();
}

module.exports.init = init;
