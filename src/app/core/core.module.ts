import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {CategoriesService} from "./services/categories.service";
import {QuestionsService} from "./services/questions/questions.service";
import {EffectsModule} from "@ngrx/effects";
import {QuizEffects} from "../shared/store/quiz/quiz.effects";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([QuizEffects])
  ],
  providers:[
    CategoriesService,
    QuestionsService
  ]
})
export class CoreModule { }
