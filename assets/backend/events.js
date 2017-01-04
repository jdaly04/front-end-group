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
  let deleteSurvey = getFormFields(event.target);
  api.deleteSurvey(deleteSurvey["survey_id"])
    .then(ui.deleteSurveySuccess)
    .catch(ui.deleteSurveyFailure);
};
//
// const onAppendAnswer = function (event) {
//   event.preventDefault();
// console.log("data is", event);
//   let appendAnswer = getFormFields(event.target);
//   api.appendAnswer(appendAnswer)
//     .then(ui.appendAnswerSuccess)
//     .catch(ui.appendAnswerFailure);
// };

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

const onChangeTitle = function (event) {
  event.preventDefault();
  api.changeTitle()
    .then(ui.changeTitleSuccess)
    .catch(ui.changeTitleFailure);
};

const addClueHandlers = () => {
  $('#questionAppend').on('submit', onQuestionAppend);
  // $('#displayAllCurrentUsersSurveys').on('submit', onDeleteSurvey);
  $('body').on('submit','.delSurvey', onDeleteSurvey);
  $('body').on('submit','.changeTitle', onChangeTitle);
  $('body').on('click','.svy-btn', function(){
    location.hash = $(this).attr('data-id');
  });
  // $('#answerAppend').on('submit', onAppendAnswer);
  $('#viewYourSurveysAndAnswers').on('click', onViewYourSurveys);
  $('#viewAllSurveys').on('click', onViewAllSurveys);
  $('#changeTitle').on('submit', onChangeTitle);
};


module.exports = {
  addClueHandlers,
};
