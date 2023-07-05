import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DifficultiesEnum } from '../shared/model/difficulties-enum';
import { CategoriesService } from '../core/services/categories.service';
import { Observable } from 'rxjs';
import { Category } from '../shared/model/category';
import { QuestionsService } from '../core/services/questions/questions.service';
import { Store } from '@ngrx/store';
import { questionsSelector } from '../shared/store/quiz/quiz.selector';
import * as fromActions from '../shared/store/quiz/quiz.actions';
import { Question } from '../shared/model/question';
import { QuizActions } from '../shared/store/quiz/quiz.actions';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  questions$: Observable<ReadonlyArray<Question>> =
    this.store.select(questionsSelector);
  generateForm!: FormGroup;
  categories$!: Observable<Category[]>;
  respondToSend: boolean = false;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.generateForm = this.fb.group({
      category: ['', Validators.required],
      difficulty: ['', Validators.required],
    });
    this.categories$ = this.categoriesService.getCategories();
    this.store.dispatch(QuizActions.resetQuiz());

    this.questions$.subscribe((value: ReadonlyArray<Question>) => {
      this.respondToSend =
        value.length > 0 && value.every((q: Question) => q?.selected_answer);
    });
  }

  protected readonly DifficultiesEnum = DifficultiesEnum;

  generateQuiz() {
    if (this.generateForm.valid) {
      let selectedCategory: number = this.generateForm.value.category;
      let selectedDifficulty: DifficultiesEnum =
        this.generateForm.value.difficulty;
      this.store.dispatch(
        fromActions.loadQuestion({
          caterogyId: selectedCategory,
          difficulty: selectedDifficulty,
        })
      );
    }
  }

  respondToQuestion(question: Question) {
    this.store.dispatch(QuizActions.respondQuiz({ question: question }));
  }

  originalOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return 0;
  };
}
