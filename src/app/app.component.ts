import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { QuizzComponent } from './quizz/quizz.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FormsModule,NavbarComponent,HomepageComponent,AccueilComponent,QuizzComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 // title = 'Quizizz-Angular';
  pseudoSubmitted = false;
  pseudoValue: string='';
  quizzStarted : boolean = false;
  selectedCategory: string = '';
  selectedDifficulty: string = '';

  handlePseudo(pseudo:string){
    this.pseudoValue=pseudo;
    this.pseudoSubmitted=true;
  }

  startQuizz(){
    this.quizzStarted = true;
  
  }



  // startQuizz(data : {category : string,difficulty:string}){
  //   this.selectedCategory = data.category;
  //   this.selectedDifficulty = data.difficulty
  //   this.quizzStarted = true;
  // }

}
