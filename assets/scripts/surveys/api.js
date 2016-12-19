'use strict';

const config = require('../config');
const store = require('../store');

const getMySurveys = (data) =>
$.ajax({
    url: config.host + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });


  module.exports = {
  getMySurveys,
};
