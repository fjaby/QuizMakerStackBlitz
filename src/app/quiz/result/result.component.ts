import {Component, OnInit} from '@angular/core';
import {questionsSelector} from "../../shared/store/quiz/quiz.selector";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Question} from "../../shared/model/question";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  questions$: Observable<ReadonlyArray<Question>> = this.store.select(questionsSelector);
  goods: number = 0;
  totals: number = 5;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.questions$.subscribe((questions) => {
      this.goods = questions.filter(question => question.selected_answer === question.correct_answer).length;
      this.totals = questions.length;
    })
  }


  resultClass() {
    if(this.goods<2){
      return {'results__score__text__bad':true}
    }if(this.goods>3){
      return {'results__score__text__good':true}
    }
    return {'results__score__text__medium':true}
  }
}
