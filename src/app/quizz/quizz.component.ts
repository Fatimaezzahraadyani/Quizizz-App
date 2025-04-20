import { Component,OnInit ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizzService } from '../quizz.service';
import { HttpClient,HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {

  @Input() category!: string;
  @Input() difficulty!: string;
  
  //constructor(private quizzService: QuizzService) {}

  questions: any[] = [];
  currentIndex: number = 0;
  selectedAnswer: string = '';
  answerChecked: boolean = false;
  isCorrect: boolean | null = null;

  
  ngOnInit() {
    const url = `https://opentdb.com/api.php?amount=10
    &category=${this.category}
    &difficulty=${this.difficulty}&type=multiple`;
    
    fetch(url)
      .then(res => res.json())//	Transforme la réponse en objet
      .then(data => {
        
        this.questions = data.results;
        console.log(this.questions);
      });
  }

  getAnswers(): string[] {
    const q = this.questions[this.currentIndex];
    return [q.correct_answer, ...q.incorrect_answers];
  }


  submitAnswer() {
    const currentQuestion = this.questions[this.currentIndex];
    this.isCorrect = this.selectedAnswer === currentQuestion.correct_answer;
    this.answerChecked = true;
  
    console.log('Réponse sélectionnée :', this.selectedAnswer);
    console.log('Bonne réponse :', currentQuestion.correct_answer);
    console.log(this.isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse !');
  }
  

  nextQuestion() {
    this.currentIndex++;
    this.selectedAnswer = '';
    this.answerChecked = false;
    this.isCorrect = false;
  }
  
  // getShuffledAnswers(question: any): string[] {
  //   const answers = [...question.incorrect_answers, question.correct_answer];
  //   return answers.sort(() => Math.random() - 0.5);
  // }
  
  




  // questions : any [] = [];
  // activeQuestionIndex : number=0;
  // score : number = 0;
  // selectedAnswer : string='';

  // constructor(private quizService : QuizzService){}

  // ngOnInit(): void {
  //   console.log("Quizz Componenet start");
  //   const category = '9';
  //   const difficulty = 'easy';


  //   this.quizService.fetchQuestions(category,difficulty).subscribe(data=>{
  //     this.questions = data.results;
  //   });
  // }

  // onAnswerSelected(answer : string): void{
  //   this.selectedAnswer= answer;
  //   if(this.selectedAnswer === this.questions [this.activeQuestionIndex].correct_answer){
  //     this.score++;
  //   }

  // }
  // nextQuestion(): void {
  //   if (this.activeQuestionIndex < this.questions.length - 1) {
  //     this.activeQuestionIndex++;  //next qst
  //   }
  // }
 


  // selectAnswer(answer: string) {
  //   console.log('Réponse sélectionnée :', answer);
  // }
  

}
