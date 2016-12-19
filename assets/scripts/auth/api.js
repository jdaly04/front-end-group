'use strict';

// const config = require('../config.js');
const store = require('../store.js');



const signUp = (data) => {
  return $.ajax({
    url: store.host + '/sign-up',
    // url: config.apiOrigins.production + 'sign-up',
    method: 'POST',
    data,
  });
};

const signIn = (data) => {
  return $.ajax({
    url: store.host + '/sign-in',
  // url: config.apiOrigins.production + 'sign-in',
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
    url: store.host + '/change-password/' + store.user._id,
    // url: config.apiOrigins.production + 'change-password' + config.apiOrigins.production.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      // Authorization: 'Token token=' + config.apiOrigins.production.user.token,
    },
    data,
  });
};

  const signOut = () => {
    return $.ajax({
      url: store.host + '/sign-out/' + store.user._id,
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
