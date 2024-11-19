import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { faBars, faBook, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-estudo',
  standalone: true,
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.css']
})
export class EstudoComponent implements OnInit {
  materia: string = '';
  assunto: string = '';
  title = 'extensao';
  faBars = faBars;
  faBook = faBook;
  faArrowRight = faArrowRight;
  
  // Opções do quiz
  quizOptions = [
    { text: 'A) 5 times or more per week', correct: false, selected: false },
    { text: 'B) 1 or 2 times per week', correct: true, selected: false },
    { text: 'C) Less than 4 times per month', correct: false, selected: false },
    { text: 'D) I don’t practice sport during the month', correct: false, selected: false },
  ];

  // Estado do quiz
  isAnswered = false;

  // Selecionar uma resposta
  selectOption(index: number): void {
    if (this.isAnswered) return; // Evitar múltiplas respostas
    this.quizOptions[index].selected = true; // Marcar como selecionada
    this.isAnswered = true; // Impedir outras respostas
  }

  // Reiniciar o quiz
  resetQuiz(): void {
    this.quizOptions.forEach((option) => (option.selected = false)); // Resetar seleções
    this.isAnswered = false; // Permitir nova interação
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtém os parâmetros da URL
    this.route.params.subscribe(params => {
      this.materia = params['materia'];
      this.assunto = params['assunto'];
    });
  }
}
