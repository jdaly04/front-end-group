'use strict';

const getFormFields = require('../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onQuestionAppend = function (event) {
  event.preventDefault();
  let questionAppend = getFormFields(event.target);
  api.questionAppend(questionAppend)
    .then(ui.questionAppendSuccess)
    .then(api.viewAllSurveys)
    .then(ui.viewAllSurveysSuccess)
    .catch(ui.questionAppendFailure);
};

const onDeleteSurvey = function (event) {
  event.preventDefault();
  let deleteSurvey = getFormFields(event.target);
  api.deleteSurvey(deleteSurvey._id)
    .then(ui.deleteSurveySuccess)
    .catch(ui.deleteSurveyFailure);
};

const onUpdateImage = function (event) {
  event.preventDefault();
  let updateImage = getFormFields(event.target);
  api.updateImage(updateImage)
    .then(ui.updateImageSuccess)
    .catch(ui.updateImageFailure);
};

const onViewYourSurveys = function (event) {
  event.preventDefault();
  console.log(event);
  api.viewYourSurveys()
    .then(ui.viewYourSurveysSuccess)
    .catch(ui.viewYourSurveysFailure);
};

const onViewAllSurveys = function (event) {
  event.preventDefault();
  api.viewAllSurveys()
    .then(ui.viewAllSurveysSuccess)
    .catch(ui.viewAllSurveysFailure);
};

const addClueHandlers = () => {
  $('#questionAppend').on('submit', onQuestionAppend);
  $('#deleteSurvey').on('submit', onDeleteSurvey);
  $('#updateImage').on('submit', onUpdateImage);
  $('#viewYourSurveysAndAnswers').on('click', onViewYourSurveys);
  $('#viewAllSurveys').on('click', onViewAllSurveys);
};


module.exports = {
  addClueHandlers,
};
