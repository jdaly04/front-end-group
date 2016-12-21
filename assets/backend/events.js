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

const onViewImage = function (event) {
  event.preventDefault();
  let viewImage = getFormFields(event.target);
  api.viewImage(viewImage)
    .then(ui.viewImageSuccess)
    .catch(ui.viewImageFailure);
};

const onViewAllSurveys = function (event) {
  event.preventDefault();
  let viewAllSurveys = getFormFields(event.target);
  api.viewAllSurveys(viewAllSurveys)
    .then(ui.viewAllSurveysSuccess)
    .catch(ui.viewAllSurveysFailure);
};

const addClueHandlers = () => {
  $('#questionAppend').on('submit', onQuestionAppend);
  $('#deleteSurvey').on('submit', onDeleteSurvey);
  $('#updateImage').on('submit', onUpdateImage);
  $('#viewImage').on('submit', onViewImage);
  $('#viewAllSurveys').on('click', onViewAllSurveys);
};


module.exports = {
  addClueHandlers,
};
