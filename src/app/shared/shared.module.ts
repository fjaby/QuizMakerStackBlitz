import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionComponent} from './component/question/question.component';
import {MaterialModule} from "./material/material.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    QuestionComponent,
    MaterialModule
  ]
})
export class SharedModule {
}
