import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  selectedCategoryId: number = 0;

  setCategory(id: number) {
    this.selectedCategoryId = id;
  }

  getCategory(): number {
    return this.selectedCategoryId;
  }


  constructor(private http:HttpClient) { }



 
  getQuestions(category: string, difficulty: string): Observable<any> {
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
    return this.http.get(url);
  }
  

}
