import { Component,ViewEncapsulation,Input, inject, OnInit, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { PseudoQuizService } from '../pseudo-quiz.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AccueilComponent implements OnInit {
    @Input () pseudo : string = '';
    
    category : string = '';
    difficulty : string = '';
  
    

    //injecter le service et le router dans ce composant
    constructor(private pseudoQuizService : PseudoQuizService,private router : Router){
      this.pseudo = this.pseudoQuizService.pseudo;
    }

    onSubmit(){
      if(this.category && this.difficulty){
        console.log('Pseudo :',this.pseudo);  //entregistre le pseudo dans service
        console.log('Category :', this.category);
        console.log('Difficulty :', this.difficulty);

        this.categoryChosen.emit(this.category);
        this.difficultyChosen.emit(this.difficulty);

        
        this.QuizzLaunched.emit();
      } else {
        console.log('Formulaire incomplet');
      }
    }




    // ---------------------------------------------------

    

  question : string = '' ;
  private http = inject(HttpClient);

  categories: Array<any> = [];
  // par default 
  selectedCategory: number = 9; 
  selectedDifficulty: string = 'medium';
  numQuestions: number = 10;
  httpClient: any;
  quizData: any;

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.http.get('https://opentdb.com/api_category.php')
     .subscribe({
      next: (res: any) => {
        this.categories = res.trivia_categories;
        console.log('Categories:', res);
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
  }

  @Output() QuizzLaunched = new EventEmitter<{category: string, difficulty: string}>();
  @Output() categoryChosen = new EventEmitter<string>();
  @Output() difficultyChosen = new EventEmitter<string>();





}
