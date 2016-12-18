'use strict';

const getFormFields = require('../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onPostImage = function (event) {
  event.preventDefault();
  let postImage = getFormFields(event.target);
  api.postImage(postImage)
    .then(ui.postImageSuccess)
    .catch(ui.postImageFailure);
};

const ondeleteSurvey = function (event) {
  event.preventDefault();
  let deleteSurvey = getFormFields(event.target);
  api.deleteSurvey(deleteSurvey.id)
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

const onViewAllImages = function (event) {
  event.preventDefault();
  let viewAllImages = getFormFields(event.target);
  api.viewAllImages(viewAllImages)
    .then(ui.viewAllImagesSuccess)
    .catch(ui.viewAllImagesFailure);
};

const addClueHandlers = () => {
  $('#postImage').on('submit', onPostImage);
  $('#deleteSurvey').on('submit', ondeleteSurvey);
  $('#updateImage').on('submit', onUpdateImage);
  $('#viewImage').on('submit', onViewImage);
  $('#viewAllImages').on('click', onViewAllImages);
};


module.exports = {
  addClueHandlers,
};
