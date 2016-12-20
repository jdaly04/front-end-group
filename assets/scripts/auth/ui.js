'use strict';

const store = require('../store.js');

const success = (data) => {
  $('#messages').text("Success");
  console.log(data);
};

const failure = (error) => {
  $('#messages').text("Failure");
  console.error(error);
};

const signUpSuccess = (data) => {
  store.user = data.user;

  $('#signUpBox').text("You Are Signed Up!");
  $('#myModal2').modal('hide');
  $('#myModal1').modal('show');
  $('#sign-up').trigger('reset');
};

const signUpFailure = (data) => {
  store.user = data.user;
  $('#signUpBox').text("Maybe You Entered Something Wrong....Or Maybe That Email Already Exists!");
};

const signInSuccess = (data) => {
  store.user = data.user;
  console.log(data);
  $('#surveyDelete').show();
  $('#imageView').show();
  $('#createSurveys').show();
  $('#sign-out').show();
  $('#sign-out-main').show();
  $('#seeYourSurveys').show();
  $('#change-password').show();
  $('#signUpBox')
    .empty()
    .append("User ID:", + data.user.id);
  $('#close').hide();
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#needAccountBox').hide();
  $('#changePwrd').show();
  $('#sign-out-pwrd').show();
  $('.containera').hide();
  $('#changePwrd-main').show();
  $('#signInBox').show();
  $('.options')
    .empty()
    .append("User ID:", + data.user.id);
  $('.userIdMain')
    .empty()
    .append("User ID:", + data.user.id);
  $('#viewAllSurveys').show();
  $('#myModal1').modal('hide');
  $('#outANDin').hide();
  $('#surveyOptions').show();
  $('#sign-in').trigger('RESET');
  $('#shakeHere').hide();
};

const signInFailure = (data) => {
  store.user = data.user;
  $('#signInBoxTwo').show().text("Maybe You Entered Something Wrong....Try Again.");
  $('#signUpBox').text('');
};

const signOutSuccess = (data) => {
  store.user = data.user;
  $('#change-password').hide();
  $('#sign-out').hide();
  $('#sign-out-main').hide();
  $('#signInBox').text('You Are Signed Out!');
  $('#signInBox').empty();
  $('#changePasswordBox').empty();
  $('.close').show();
  $('#sign-in').show();
  $('#sign-up').show();
  $('#signUpBox').empty();
  $('#needAccountBox').show();
  $('#changePasswordBox').show();
  $('#changePwrd').hide();
  $('#changePwrd-main').hide();
  $('#myModal3').modal('hide');
  $('.containera').show();
  $('.options')
    .empty()
    .append("User Options");
  $('.userIdMain').empty();
  $('#viewAllSurveys').hide();
  $('#outANDin').show();
  $('#surveyOptions').hide();
  $('#shakeHere').empty().hide();
  $('#signInBoxTwo').empty().hide();
  $('#sign-in').trigger('reset');
  $('#myModal4').modal('hide');
};

const changePasswordFailure = (data) => {
  console.log(data);
  $('#changePasswordBox').text("Maybe You Entered Something Wrong....Try Again.");
  $('#signInBox').text("Password NOT changed. You're Still Logged In Though!");
};

const changePasswordSuccess = (data) => {
  console.log(data);
  $('#signInBox').text('Write Down Your New Password!');
  $('#myModal3').modal('hide');
  $('#myModal1').modal('show');
  $('#sign-in').trigger('reset');
  $('#change-password').trigger('reset');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signUpSuccess,
  signUpFailure,
  changePasswordFailure,
  changePasswordSuccess,
};
