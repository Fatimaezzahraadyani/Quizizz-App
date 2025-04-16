import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PseudoQuizService } from '../pseudo-quiz.service';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  encapsulation : ViewEncapsulation.None
})
export class HomepageComponent {
 //stocker le username
  pseudo : string = '';
  //injecter le service et le router dans ce composant
  constructor (private pseudoQuizService: PseudoQuizService,private router: Router){}

  @Output() pseudoSubmitted = new EventEmitter<string>();
  

  onSubmit(){
    if(this.pseudo.trim()){
      this.pseudoQuizService.pseudo=this.pseudo;  //enregistrer le username dans le service 
      this.pseudoSubmitted.emit(this.pseudo);
      this.router.navigate(['/accueil']);  //navigation vers la carte de choix
      
    }

  }

}
 