import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from "@ngrx/effects";
import {QuizEffects} from "./shared/store/quiz/quiz.effects";
import {StoreModule} from "@ngrx/store";
import {quizReducer} from './shared/store/quiz/quiz.reducer';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {QUIZ_FEATURE_KEY} from "./shared/store/quiz/quiz.states";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({
        [QUIZ_FEATURE_KEY]: quizReducer
      }),
    EffectsModule.forRoot([QuizEffects]),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
