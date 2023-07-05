import {createFeatureSelector, createSelector} from "@ngrx/store";
import {QUIZ_FEATURE_KEY, QuizState} from "./quiz.states";

const selectRoot = createFeatureSelector<QuizState>(QUIZ_FEATURE_KEY);

export const questionsSelector = createSelector(selectRoot, (state: QuizState) => state.questions);


