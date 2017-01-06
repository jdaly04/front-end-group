'use strict';

const store = require('../scripts/store.js');
const showImagesTemplate = require('../scripts/templates/view-all-surveys.handlebars');
const showYourSurveysTemplate = require('../scripts/templates/delete.handlebars');
const answersTemplate = require('../scripts/templates/answers.handlebars');
const backendApi = require('./api');
// const viewAllSurveys = require('./api.js');

const success = (data) => {
  store.user = data.user;
};

const failure = (error) => {
  console.error(error);
};

const viewYourSurveysSuccess = (data) => {
  // store.user = data.user;
  console.log("data is ", data);
  // debugger;
  let newData = {surveys:data.survey};
  // debugger;
  console.log('data length is ', data.survey.length);
  // let count = 0;
  for (let i = 0; i < data.survey.length; i++) {
    let answersArr = data.survey[i].answers;
    // for(let j=0; j < answersArr.length; j++) {
    //   if(answersArr[j] === answersArr[j+1]) {
    //     count ++;
    //   }
    // }

    let sameAnswers = {};
    let count = 0;
    debugger;
      for (let i = 0; i < answersArr.length; i++) {
      sameAnswers[answersArr[i]] = count++;
      //need to iterate through array elements, which are strings. When you come to a unique string, add it as a key in the empty object. When you come to the same string again.. add 1 to the "count" (value) for that specific key (answer)
    }
    console.log(sameAnswers);

  // $('#displayAllCurrentUsersSurveys').show().html(showYourSurveysTemplate(data));
  $('#displayAllCurrentUsersSurveys').show().html(showYourSurveysTemplate(newData));
  $('#myModal1').modal('hide');
  $('#myModal6').modal('show');
  }
};

const viewYourSurveysFailure = (data) => {
  console.log("data fail is", data);
};

const questionAppendSuccess = (data) => {
   store.survey = data.survey;
  console.log('this is data.survey._id', data.survey._id);
  $('#myModal1').modal('hide');
  $('#questionAppend').trigger('reset');
  $('#surveyBox').show().text('Survey Was Created! Check The List');
  return data.survey._id;
  // $('#myModal5').modal('hide');
};

const questionAppendFailure = (data) => {
  console.log(data);
  $('#surveyBox').text('Survey Was NOT Created! Enter Valid Title Please.');
};

const deleteSurveySuccess = (data) => {
  console.log(data);
  $('#signInBox')
      .empty()
      .append('Image Was Deleted');
  $('#deleteSurvey').trigger('reset');
  $('.surveysContainer')
      .empty()
      .show()
      .append('That Survey was Deleted!');
      $('#myModal6').modal('hide');

};

const deleteSurveyFailure = (data) => {
  console.log("data is ", data);
  $('#signInBox')
      .empty()
      .append('That May Not Belong To You (Or It May Not Exist)');
};

const appendAnswerSuccess = (data) => {
  console.log(data);
  $('#signInBox')
      .empty()
      .append('Answer Was Submitted');
  $('#appendAnswer').trigger('reset');
};

const appendAnswerFailure = (data) => {
  console.log(data);
  $('#signInBox')
      .empty()
      .append('Sorry! Something Went Wrong.');
};

const viewAllSurveysFailure = (data) => {
  console.log(data);
  $('#signInBox').empty();
};

const changeTitleSuccess = (data) => {
  console.log(data);
};

const changeTitleFailure = (data) => {
  console.log(data);
};

const viewAllSurveysSuccess = (data) => {
console.log(data);
  $('.surveysContainer').show().html(showImagesTemplate(data));
  $('#signInBox').empty();
  $('#answerAppend').hide();
  $('.survID').hide();

  //creates a jquery click function
    jQuery(function ($) {
  //when this div class is clicked
        $('.imageImage').click(function () {
  //it empties and appends
            $(".surveysContainer")
              .empty()
  //targets the html of this(the .imageImage DIV)
              .html($(this).data('src', 'question'));
              // .append($(this).data());
              $(".surveysAnswers")
                .empty()
                .show().html(answersTemplate(data));
                $('#answerAppend').on('submit', function () {
                  event.preventDefault();

                  let answer = $('#answerInput').val();
                  let id = $('#surveyId').text();
                  let survey = {
                    survey: {
                      id: id,
                      answers: answer
                    }
                  };
                  backendApi.appendAnswer(survey)
                  .then(console.log)
                  .catch(console.error);
                  // return false;
                });
                // .append(FORM FOR ANSWERS NEEDS TO GO HERE)
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
  appendAnswerSuccess,
  appendAnswerFailure,
  viewYourSurveysSuccess,
  viewYourSurveysFailure,
  viewAllSurveysSuccess,
  viewAllSurveysFailure,
  changeTitleSuccess,
  changeTitleFailure,
};
