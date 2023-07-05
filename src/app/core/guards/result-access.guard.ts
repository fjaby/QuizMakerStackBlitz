import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {questionsSelector} from "../../shared/store/quiz/quiz.selector";
import {map, Observable, reduce, tap} from "rxjs";
import {Question} from "../../shared/model/question";

export const resultAccessGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
  const store: Store = inject(Store)
  const router: Router = inject(Router)
  const questions$: Observable<ReadonlyArray<Question>> = store.select(questionsSelector)

  return questions$.pipe(
    map((quesitons: ReadonlyArray<Question>) =>
      quesitons.length > 0 && quesitons.every((question: Question) => question.selected_answer != '')
    ),
    tap(isRespond => {
      if(!isRespond){
        router.navigate(['/'])
      }
    })
  )
};
