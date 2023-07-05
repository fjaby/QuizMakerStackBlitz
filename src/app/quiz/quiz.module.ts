import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizComponent} from './quiz.component';
import {ResultComponent} from './result/result.component';
import {QuizRoutingModule} from "./quiz-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    QuizComponent,
    ResultComponent
  ],
  imports: [
    QuizRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class QuizModule {
}
