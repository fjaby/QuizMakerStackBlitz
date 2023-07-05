import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import {Question} from "../../model/question";
import {HttpErrorResponse} from "@angular/common/http";
import {DifficultiesEnum} from "../../model/difficulties-enum";


export const QuizActions = createActionGroup({
  source: 'QUIZ',
  events: {
    'Respond Quiz': props<{ question: Question }>(),
    'Reset Quiz': emptyProps()
  },
});

export const loadQuestion = createAction('[QUIZ API] load questions',props<{caterogyId: number, difficulty: DifficultiesEnum}>());
export const loadQuestionSuccess = createAction(
  '[QUIZ API] load questions success',
  props<{ questions: ReadonlyArray<Question> }>()
)
export const loadQuestionFailure = createAction(
  '[QUIZ API] load questions failure',
  props<{ error: HttpErrorResponse | Error }>()
)

