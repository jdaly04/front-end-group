'use strict';

const store = require('../scripts/store.js');

  const postImage = function (data) {
    return $.ajax({
      url: store.host + '/users',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
data
    });
  };

  const deleteSurvey = function (id) {
    return $.ajax({
      url: store.host + '/images' + id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
    });
  };
window.deleteSurvey = deleteSurvey;

const updateImage = function (data) {
  return $.ajax({
    url: store.host + '/images' + data.image.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data
  });
};

const viewImage = function (data) {
  return $.ajax({
    url: store.host + '/images' + data.image.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data
  });
};

const viewAllImages = function (data) {
  return $.ajax({
    url: store.host + '/users',
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token,
    // },
    data
  });
};

module.exports = {
  postImage,
  deleteSurvey,
  updateImage,
  viewImage,
  viewAllImages,
};
