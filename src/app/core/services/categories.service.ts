import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Category} from "../../shared/model/category";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {ApiCategories} from "../../shared/model/api-categories";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly CATEGORIES_ENDPOINT = "api_category.php";

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<ApiCategories>(environment.apiUrl + this.CATEGORIES_ENDPOINT)
      .pipe(
        map(value => value.trivia_categories)
      );
  }
}
