'use strict';

const store = require('../scripts/store.js');
const showImagesTemplate = require('../scripts/templates/view-all-images.handlebars');
// const viewAllSurveys = require('./api.js');

const success = (data) => {
    store.image = data.image;
};

const failure = (error) => {
  console.error(error);
};

const viewImageSuccess = () => {
  $('#myModal1').modal('hide');
};

const viewImageFailure = (data) => {
  console.log(data);
  $('#signInBox')
      .empty()
      .append('Maybe Not a Valid #?  Check the List!  Hover for Info!');
};

const questionAppendSuccess = () => {
$('#myModal1').modal('hide');
$('#questionAppend').trigger('reset');
$('#surveyBox').text('Survey Was Created! Check The List');

};

const questionAppendFailure = () => {
$('#surveyBox').text('Survey Was NOT Created! Choose Another Title Please.');
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

const viewAllSurveysFailure = (data) => {
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
  viewImageSuccess,
  viewImageFailure,
  viewAllSurveysSuccess,
  viewAllSurveysFailure,

};
