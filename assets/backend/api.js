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


  const deleteSurvey = function (id) {
console.log(id);
    return $.ajax({
      url: config.apiOrigin + '/surveys/' + id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
    });
  };
window.deleteSurvey = deleteSurvey;

const appendAnswer = function (data) {
  console.log("data is ", data);
  let id = data.survey.id;
  delete(data.survey.id);
console.log("data is ", data);
  return $.ajax({
    url: config.apiOrigin + '/answers/' + id,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

const viewYourSurveys = function (data) {
console.log(data);
  return $.ajax({
    url: config.apiOrigin + '/my-surveys',
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
  appendAnswer,
  viewYourSurveys,
  viewAllSurveys,
};
