import { RECIEVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions';
export default function questions (state={}, action) {
    switch(action.type){
        case RECIEVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        default :
            return state
    }
}
