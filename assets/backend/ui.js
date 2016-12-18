'use strict';

const store = require('../scripts/store.js');
const showImagesTemplate = require('../scripts/templates/view-all-images.handlebars');
const showHoverTemplate = require('../scripts/templates/click-small-image-to-big.handlebars');


const success = (data) => {
    store.image = data.image;
};

const failure = (error) => {
  console.error(error);
};

const viewImageSuccess = (data) => {
    let img = $("<img>").attr("src", data.image.url).height(300).width(300);
    $(".img-container")
      .empty()
      .show()
      .append(img);
  $('.img-container-info')
      .empty()
      .show()
      .append("Image ID:", + data.image.id);
  $('.img-container-info-one').hide();
  $('.img-container-info-two')
      .empty()
      .show()
      .append("User ID:", + data.image.user_id);
  $('#signInBox')
      .empty()
      .append('Go to The Main Page to Take a Look');
  $('#myModal1').modal('hide');
  $('#viewImage').trigger('reset');

};

const viewImageFailure = (data) => {
  console.log(data);
  $('#signInBox')
      .empty()
      .append('Maybe Not a Valid #?  Check the List!  Hover for Info!');
};

const postImageSuccess = (data) => {
 console.log(data);
 let img = $("<img>").attr("src", data.image.url).height(300).width(300);
 $(".img-container")
   .empty()
    .show()
   .append(img);
$('.img-container-info')
    .empty()
    .show()
    .append("Image ID:", + data.image.id);
$('.img-container-info-one')
    .empty()
    .show()
    .append('Image Was Just Posted!');
$('.img-container-info-two')
    .empty()
    .show()
    .append("User ID:", + data.image.user_id);
$('#signInBox')
    .empty()
    .append('Image Was Posted As ID:', + data.image.id);
$('#myModal1').modal('hide');
$('#postImage').trigger('reset');

};

const postImageFailure = () => {
$('#signInBox').text('Image Was NOT Posted!');
};

const deleteSurveySuccess = () => {
  $('#signInBox')
      .empty()
      .append('Image Was Deleted');
    $(".img-container")
      .empty();
    $('.img-container-info')
      .empty()
      .text("Image Was Deleted!");
    $('.img-container-info-one')
      .empty();
    $('.img-container-info-two')
      .empty();
    $('#deleteSurvey').trigger('reset');

};

const deleteSurveyFailure = (data) => {
  console.log(data);
  $('#signInBox')
      .empty()
      .append('That May Not Belong To You (Or It May Not Exist)');
};


const updateImageSuccess = (data) => {
  console.log(data);
  $('#signInBox')
      .empty()
      .append('Image URL Was Updated');
  $('#updateImage').trigger('reset');

};

const updateImageFailure = (data) => {
  console.log(data);
  $('#signInBox')
      .empty()
      .append('Nope.  Something Went Wrong.');
};

const viewAllImagesFailure = (data) => {
  console.log(data);
  $('#signInBox').empty();
};

const viewAllImagesSuccess = (data) => {
//this line takes the data.images and for each element and index, gives it a new title definition (which is strung together using handlebars `image id, url, user id`) which points to the element data and displays it.
  data.images.forEach((e,i)=>data.images[i].title = `Image ID: ${e.id} URL: ${e.url} User ID: ${e.user_id}`);
  $('.surveysContainer').show().html(showImagesTemplate(data));
  $('.img-container').show();
  $('.img-container-info').show();
  $('.img-container-info-two').show();
  $('#signInBox').empty();
  $('.imageImage').attr('title', (showHoverTemplate(data)));
//creates a jquery click function
  jQuery(function ($) {
//when this div class is clicked
      $('.imageImage').click(function () {
//it empties and appends
          $('.img-container')
            .empty()
//targets the html of this(the .imageImage DIV)
            .html($(this).html());
          $('.img-container-info').empty();
          $('.img-container-info-one').empty();
          $('.img-container-info-two').empty();

      });



  });

};


module.exports = {
  failure,
  success,
  postImageSuccess,
  postImageFailure,
  deleteSurveySuccess,
  deleteSurveyFailure,
  updateImageSuccess,
  updateImageFailure,
  viewImageSuccess,
  viewImageFailure,
  viewAllImagesSuccess,
  viewAllImagesFailure,

};
