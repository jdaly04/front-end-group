'use strict';

const store = require('../scripts/store.js');
const showImagesTemplate = require('../scripts/templates/view-all-images.handlebars');
const showYourSurveysTemplate = require('../scripts/templates/delete.handlebars');

// const viewAllSurveys = require('./api.js');

const success = (data) => {
    store.image = data.image;
};

const failure = (error) => {
  console.error(error);
};

const viewYourSurveysSuccess = (data) => {
  store.user = data.user;
  $('#displayAllCurrentUsersSurveys').show().html(showYourSurveysTemplate(data));
  $('#myModal1').modal('hide');
  $('#myModal6').modal('show');
};

const viewYourSurveysFailure = () => {
};

const questionAppendSuccess = (data) => {
  store.user = data.user;
  $('#myModal1').modal('hide');
  $('#questionAppend').trigger('reset');
  $('#surveyBox').show().text('Survey Was Created! Check The List');
  // $('#myModal5').modal('hide');
};

const questionAppendFailure = () => {
  $('#surveyBox').text('Survey Was NOT Created! Enter Valid Title Please.');
};

const deleteSurveySuccess = () => {
  $('#signInBox')
      .empty()
      .append('Image Was Deleted');
    $('#deleteSurvey').trigger('reset');
};

const deleteSurveyFailure = () => {
  $('#signInBox')
      .empty()
      .append('That May Not Belong To You (Or It May Not Exist)');
};

const updateImageSuccess = () => {
  $('#signInBox')
      .empty()
      .append('Image URL Was Updated');
  $('#updateImage').trigger('reset');
};

const updateImageFailure = () => {
  $('#signInBox')
      .empty()
      .append('Nope.  Something Went Wrong.');
};

const viewAllSurveysFailure = () => {
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
          $('.img-container')
            .empty()
//targets the html of this(the .imageImage DIV)
            .html($(this).html());
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
  updateImageSuccess,
  updateImageFailure,
  viewYourSurveysSuccess,
  viewYourSurveysFailure,
  viewAllSurveysSuccess,
  viewAllSurveysFailure,

};
