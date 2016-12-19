'use strict';

const store = require('../store');
const api = require('./api.js');
const ui = require('./ui.js');


const onGetSurveys = function() {
  // event.preventDefault();
  if (store.user) {
  api.getMySurveys()
    .then(ui.getMySurveysSuccess)
    .catch(ui.failure);
  }
};

const getAllHandler = () => {
  $('#BUTTON NAME').on('click', onGetSurveys);
};
module.exports = {
  onGetSurveys,
  getAllHandler,
};
