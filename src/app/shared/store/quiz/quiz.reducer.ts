import {Question} from "../../model/question";
import {Action, createReducer, on} from "@ngrx/store";
import {loadQuestion, loadQuestionSuccess, QuizActions} from "./quiz.actions";
import {QuizState} from "./quiz.states";
import {state} from "@angular/animations";


export const initialState: QuizState = {questions: []};

export const quizReducer = createReducer<QuizState, Action>(initialState,

  on(QuizActions.resetQuiz,(state)=>{
    return {...state,
    questions: []}
  }),

  on(QuizActions.respondQuiz, (state, props) => {
    return {
      ...state,
      questions: [...state.questions].map(question => (question.id == props.question.id) ? props.question : question)
    }
  }),

  on(loadQuestion, (state: QuizState) => {
    return {
      ...state
    }
  }),
  on(loadQuestionSuccess, (state: QuizState, props) => {
    return {
      ...state,
      questions: props.questions,
    }
  })
);




