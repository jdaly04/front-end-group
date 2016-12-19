'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
// const store = require('../store.js');

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./example');

const authEvents = require('./auth/events.js');
const backEndEvents = require('../backend/events.js');
const backEndApi = require('../backend/api.js');

$(() => {
  setAPIOrigin(location, config);
  authEvents.addHandlers();
  backEndEvents.addClueHandlers();
  backEndApi.viewAllSurveys();
  $('#sign-out').hide();
  $('#sign-out-main').hide();
  // $('.img-container').hide();
  // $('.img-container-info').hide();
  // $('.img-container-info-one').hide();
  // $('.img-container-info-two').hide();
  $('.surveysContainer').hide();
  $('#changePwrd').hide();
  $('#changePwrd-main').hide();
  $('#signInBox').hide();
  $('#viewAllSurveys').hide();
  // $('#surveyOptions').hide();
  $('#shakeHere').hide();

});
