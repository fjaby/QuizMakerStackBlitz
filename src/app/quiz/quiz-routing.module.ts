import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizComponent} from "./quiz.component";
import {ResultComponent} from "./result/result.component";
import {CoreModule} from "../core/core.module";
import {resultAccessGuard} from "../core/guards/result-access.guard";

const routes: Routes = [
  {
    path: '',
    component: QuizComponent
  },
  {
    path: 'result',
    component: ResultComponent,
    canActivate: [resultAccessGuard]
  },
];

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class QuizRoutingModule {
}
