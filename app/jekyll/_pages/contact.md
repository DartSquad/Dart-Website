---
title: Contact
permalink: '/contact'
layout: main
---

<div class="container" data-page="contact">
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

      <div class="google-map"></div>

      <div class="address">
        <p>214 E 8th Street</p>
        <p>Cincinnati, OH 45202</p>
        <p>(555) 555-5555</p>
      </div>
    </div>
  </div>
</div>