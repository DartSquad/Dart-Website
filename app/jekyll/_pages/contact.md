---
title: Contact
permalink: '/contact'
layout: main
---

<div class="container">
  <div class="row page-title">
    <div class="col-xs-12">
      <h1>{{ page.title }}</h1>
    </div>
  </div>
  <div class="row contact">
    <div class="col-md-6">
      <h4>Send Us An Email</h4>
      <form>
        <div class="text-input-element">
          <label class="text-label" for="first_name">First Name</label>
          <input class="text-input" type="text" name="first_name" placeholder="Jon">
        </div>
        <div class="text-input-element">
          <label class="text-label" for="last_name">Last Name</label>
          <input class="text-input" type="text" name="last_name" placeholder="Doe">
        </div>
        <div class="text-input-element">
          <label class="text-label" for="email">Email Address</label>
          <input class="text-input" type="email" name="email" placeholder="jon.doe@gmail.com">
        </div>
        <div class="text-input-element">
          <label class="message-label" for="message">Message</label>
          <textarea class="message-input" name="message"></textarea>
        </div>
        <div class="text-input-element">
          <button type="submit" class="btn contact-submit">Send Message</button>
        </div>
      </form>
    </div>
    <div class="col-md-6 location">
      <h4>Visit Our Location</h4>

      <script src='https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDsVXDgAT8bFBwynKOM_BYQ_js7bZpkg_4'></script><div style='overflow:hidden;height:250px;width:100%;'><div id='gmap_canvas' style='height:250px;width:100%;'></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div> <a href='https://www.embed-map.net/'>add a google map to my website</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=8ac70d286117fd225854beff202842da7d114ea9'></script><script type='text/javascript'>function init_map(){var myOptions = {zoom:12,center:new google.maps.LatLng(39.10519559999999,-84.50876640000001),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(39.10519559999999,-84.50876640000001)});infowindow = new google.maps.InfoWindow({content:'<strong>TreeTees</strong><br>E 8th St. Cincinnati, OH<br>06510 New Haven<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>

      <div class="address">
        <p>123 Error Lane</p>
        <p>Cincinnati, OH 45202</p>
        <p>(555) 555 - 5555</p>
      </div>
    </div>
  </div>
</div>