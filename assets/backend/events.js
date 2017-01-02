'use strict';

const getFormFields = require('../../lib/get-form-fields');
// const store = require('../scripts/store.js');
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
  let data = getFormFields(event.target);
  api.deleteSurvey(data)
    .then(ui.deleteSurveySuccess)
    .catch(ui.deleteSurveyFailure);
};

const onappendAnswer = function (event) {
  event.preventDefault();
  let appendAnswer = getFormFields(event.target);
  api.appendAnswer(appendAnswer)
    .then(ui.appendAnswerSuccess)
    .catch(ui.appendAnswerFailure);
};

const onViewYourSurveys = function (event) {
  event.preventDefault();
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
  $('#displayAllCurrentUsersSurveys').on('submit', onDeleteSurvey);
  // $('#delSurvey').on('submit', onDeleteSurvey);
  $('#appendAnswer').on('submit', onappendAnswer);
  $('#viewYourSurveysAndAnswers').on('click', onViewYourSurveys);
  $('#viewAllSurveys').on('click', onViewAllSurveys);
};


module.exports = {
  addClueHandlers,
};
