import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {QuestionsService} from "../../../core/services/questions/questions.service";
import * as fromActions from "./quiz.actions";
import {debounceTime, map, switchMap} from "rxjs";
import {Question} from "../../model/question";


@Injectable()
export class QuizEffects {

  loadQuestions$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadQuestion),
    debounceTime(500),
    switchMap(payload =>
      this.questionService.generateQuestions(payload.difficulty, payload.caterogyId)
    ),
    map((res: Question[]) => fromActions.loadQuestionSuccess({questions: res})),
  ));


  constructor(private actions$: Actions, private questionService: QuestionsService) {
  }
}
