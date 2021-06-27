import { RECIEVE_USERS } from '../actions/users';
import { ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions';

export default function users(state, action) {
  switch (action.type) {
    case RECIEVE_USERS:
      return {
        ...state,  
        ...action.users
    }
    default:
      return state;
  }
}