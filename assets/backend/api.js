'use strict';

const store = require('../scripts/store.js');

  const questionAppend = function (data) {
    return $.ajax({
      url: store.host + '/surveys',
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
      url: store.host + '/surveys/' + _id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
    });
  };
window.deleteSurvey = deleteSurvey;

const updateImage = function (data) {
  return $.ajax({
    url: store.host + '/images' + data.image.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data
  });
};

const viewYourSurveys = function (data) {
  return $.ajax({
    url: store.host + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data
  });
};

const viewAllSurveys = function (data) {
  return $.ajax({
    url: store.host + '/surveys',
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
