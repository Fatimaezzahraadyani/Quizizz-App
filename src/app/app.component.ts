import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FormsModule,NavbarComponent,HomepageComponent,AccueilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 // title = 'Quizizz-Angular';
  pseudoSubmitted = false;
  pseudoValue: string='';

  handlePseudo(pseudo:string){
    this.pseudoValue=pseudo;
    this.pseudoSubmitted=true;
  }
}
