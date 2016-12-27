'use strict';

const store = require('../scripts/store.js');
const config = require('../scripts/config.js');


  const questionAppend = function (data) {
    return $.ajax({
      url: config.apiOrigin + '/surveys',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
    data
    });
  };
  window.questionAppend = questionAppend;


  const deleteSurvey = function (_id) {
    return $.ajax({
      url: config.apiOrigin + '/surveys/' + _id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
    });
  };
window.deleteSurvey = deleteSurvey;

const updateImage = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/images' + data.image.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data
  });
};

const viewYourSurveys = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data
  });
};

const viewAllSurveys = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token,
    // },
    data
  });
};

module.exports = {
  questionAppend,
  deleteSurvey,
  updateImage,
  viewYourSurveys,
  viewAllSurveys,
};
