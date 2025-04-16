import { Component,ViewEncapsulation,Input} from '@angular/core';
import { Router } from '@angular/router';
import { PseudoQuizService } from '../pseudo-quiz.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AccueilComponent {
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
      }
    }


}
