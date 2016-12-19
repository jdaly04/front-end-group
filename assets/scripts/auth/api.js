'use strict';

const config = require('../config.js');

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigins.host + 'sign-up',

    // url: config.apiOrigins.production + 'sign-up',
    method: 'POST',
    data,
  });
};

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigins.host + 'sign-in',
  // url: config.apiOrigins.production + 'sign-in',
    method: 'POST',
    data,
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigins.production + 'change-password' + config.apiOrigins.production.user.id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + config.apiOrigins.production.user.token,
    },
  });
};

  const signOut = () => {
    return $.ajax({
      url: config.apiOrigins.production + 'sign-out' + config.apiOrigins.production.user.id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + config.apiOrigins.production.user.token,
      },
    });
};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
};
