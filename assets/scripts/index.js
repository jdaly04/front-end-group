'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./example');

const authEvents = require('./auth/events.js');
const backEndEvents = require('../backend/events.js');

$(() => {
  setAPIOrigin(location, config);
  authEvents.addHandlers();
  backEndEvents.addClueHandlers();
  $('#reset').hide();
  $('#stats').hide();
  $('#sign-out').hide();
  $('#sign-out-main').hide();
  $('#imageView').hide();
  $('#imageDelete').hide();
  $('#imageUpdate').hide();
  $('#imagePost').hide();
  $('.img-container').hide();
  $('.img-container-info').hide();
  $('.img-container-info-one').hide();
  $('.img-container-info-two').hide();
  $('.allImagesData').hide();
  $('#changePwrd').hide();
  $('#changePwrd-main').hide();
  $('#signInBox').hide();
  $('#viewAllImages').hide();
  $('#imageOptions').hide();
  $('#shakeHere').hide();
});
