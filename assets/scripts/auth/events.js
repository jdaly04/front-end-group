'use strict';

const store = require('../store.js');
const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure);
};

const onSignOut = function (event) {
  event.preventDefault();
  let data = store.user;
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
//Need to combine these now that modal openings have been secured through the chain of User actions
  $('#sign-out').on('click', onSignOut);
  $('#sign-out-main').on('click', onSignOut);
  $('#sign-out-pwrd').on('click', onSignOut);
  $('#sign-out-modal-five').on('click', onSignOut);
  $('#sign-out-modal-six').on('click', onSignOut);

};

module.exports = {
  addHandlers,
};
