import { saveQuestion, saveQuestionAnswer } from '../utils/api'

export const ADD_QUESTION = 'ADD_QUESTION';
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}


export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    const questionInfo = {
      optionOneText,
      optionTwoText,
      author: authedUser,
    };

    return saveQuestion(questionInfo)
      .then(function(question) { dispatch(addQuestion(question)) });
  };
}

export function recieveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions,
  };
}

export function answerQuestion(authedUser, qid, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleAnswerQuestion(question, answer) {
  return function(dispatch, getState) {
    const { authedUser } = getState();

    const answerInfo = {
      authedUser,
      qid: question.id,
      answer,
    };

    return saveQuestionAnswer(answerInfo)
      .then(function() { dispatch((answerQuestion(authedUser, question, answer))) })
  }
}