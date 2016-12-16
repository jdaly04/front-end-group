'use strict';

const store = require('../scripts/store.js');

  const postImage = function (data) {
    return $.ajax({
      url: store.host + '/images/',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
data
    });
  };

  const deleteImage = function (id) {
    return $.ajax({
      url: store.host + '/images/' + id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
    });
  };
window.deleteImage = deleteImage;

const updateImage = function (data) {
  return $.ajax({
    url: store.host + '/images/' + data.image.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data
  });
};

const viewImage = function (data) {
  return $.ajax({
    url: store.host + '/images/' + data.image.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data
  });
};

const viewAllImages = function (data) {
  return $.ajax({
    url: store.host + '/images/',
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token,
    // },
    data
  });
};

module.exports = {
  postImage,
  deleteImage,
  updateImage,
  viewImage,
  viewAllImages,
};
