'use strict';

// const config = require('../config.js');
const store = require('../store.js');
const config = require('../config.js');



const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    // url: config.apiOrigin.production + 'sign-up',
    method: 'POST',
    data,
  });
};

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
  // url: config.apiOrigin.production + 'sign-in',
    method: 'POST',
    data,
  });
};


// const changePassword = (data) => {
//   return $.ajax({
//     url: app.host + '/change-password/' + app.user._id,
//     method: "PATCH",
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: data,
//   });
// };


const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user._id,
    // url: config.apiOrigin.production + 'change-password' + config.apiOrigin.production.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      // Authorization: 'Token token=' + config.apiOrigin.production.user.token,
    },
    data,
  });
};

  const signOut = () => {
    return $.ajax({
      url: config.apiOrigin + '/sign-out/' + store.user._id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
    });
};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
};
