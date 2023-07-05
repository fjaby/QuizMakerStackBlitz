import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../model/question";
import {Store} from "@ngrx/store";
import {QuizActions} from "../../store/quiz/quiz.actions";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question?: Question
  @Input() displayResult: boolean = false
  @Output() selectedResponseEvent = new EventEmitter<Question>()

  constructor(private store: Store) {
  }

  ngOnInit() {
  }


  selectResponse(value: string) {
    this.selectedResponseEvent.emit({...this.question!, selected_answer: value})
  }

  displayResponse(response: String):string {
    if (this.displayResult) {
      if (response !== this.question?.correct_answer && response === this.question?.selected_answer) {
        return 'answer__incorrect';
      }
      if(response === this.question?.correct_answer) {
        return 'answer__correct';
      }
    }
    return'';


  }
}
