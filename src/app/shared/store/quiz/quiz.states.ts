import {Question} from "../../model/question";

export const QUIZ_FEATURE_KEY = 'quiz';

export interface State {
  readonly [QUIZ_FEATURE_KEY]: QuizState;
}

export interface QuizState {
  questions:  ReadonlyArray<Question>;
}
