'use strict';

const store = require('../scripts/store.js');
const showImagesTemplate = require('../scripts/templates/view-all-images.handlebars');
const showYourSurveysTemplate = require('../scripts/templates/delete.handlebars');
const answersTemplate = require('../scripts/templates/answers.handlebars');

// const viewAllSurveys = require('./api.js');

const success = (data) => {
  store.user = data.user;
};

const failure = (error) => {
  console.error(error);
};

const viewYourSurveysSuccess = (data) => {
  $('#displayAllCurrentUsersSurveys').show().html(showYourSurveysTemplate(data));
  $('#myModal1').modal('hide');
  $('#myModal6').modal('show');

};

const viewYourSurveysFailure = (data) => {
  console.log(data);
};

const questionAppendSuccess = (data) => {
  store.user = data.user;
  console.log(data);
  $('#myModal1').modal('hide');
  $('#questionAppend').trigger('reset');
  $('#surveyBox').show().text('Survey Was Created! Check The List');
  // $('#myModal5').modal('hide');
};

const questionAppendFailure = (data) => {
  console.log(data);
  $('#surveyBox').text('Survey Was NOT Created! Enter Valid Title Please.');
};

const deleteSurveySuccess = (data) => {
  console.log(data);
  $('#signInBox')
      .empty()
      .append('Image Was Deleted');
    $('#deleteSurvey').trigger('reset');
};

const deleteSurveyFailure = (data) => {
  console.log("data is ", data);
  $('#signInBox')
      .empty()
      .append('That May Not Belong To You (Or It May Not Exist)');
};

const appendAnswerSuccess = (data) => {
  console.log(data);
  $('#signInBox')
      .empty()
      .append('Image URL Was Updated');
  $('#appendAnswer').trigger('reset');
};

const appendAnswerFailure = (data) => {
  console.log(data);
  $('#signInBox')
      .empty()
      .append('Nope.  Something Went Wrong.');
};

const viewAllSurveysFailure = (data) => {
  console.log(data);
  $('#signInBox').empty();
};

const viewAllSurveysSuccess = (data) => {
  $('.surveysContainer').show().html(showImagesTemplate(data));
  $('#signInBox').empty();
  //creates a jquery click function
    jQuery(function ($) {
  //when this div class is clicked
        $('.imageImage').click(function () {
  //it empties and appends
            $(".surveysContainer")
              .empty()
  //targets the html of this(the .imageImage DIV)
              .html($(this).data('src', 'title'));
              // .append($(this).data());
              $(".surveysAnswers")
                .empty()
                .show().html(answersTemplate(data));

                // .append(FORM FOR ANSWERS NEEDS TO GO HERE)
        });



    });
};


module.exports = {
  failure,
  success,
  questionAppendSuccess,
  questionAppendFailure,
  deleteSurveySuccess,
  deleteSurveyFailure,
  appendAnswerSuccess,
  appendAnswerFailure,
  viewYourSurveysSuccess,
  viewYourSurveysFailure,
  viewAllSurveysSuccess,
  viewAllSurveysFailure,
};
