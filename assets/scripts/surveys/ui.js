'use strict';

const allSurveys = require('../templates/allSurveys.handlebars');

const getMySurveysSuccess = (data) => {
  $('.get-all-surveys').html(allSurveys(data));
  // $('#update-submit').show();
  // $('#updateLibName').show();
  // $('#delete').show();
  // $('#delete-button').show();
  // $('.messages').empty();
  console.log(data);
};

const failure = (error) => {
  $('.messages').text('Oops, something went wrong. Try again.');
  console.error(error);
};


module.exports = {
  getMySurveysSuccess,
  failure,
};
