import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  // Simulação de uma requisição para obter as questões
  getQuestions(): Observable<any[]> {
    const questions = [
      {
        id: 1,
        question: 'Qual é a fórmula da água?',
        options: ['H2O', 'CO2', 'O2', 'NaCl'],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'Quem foi o primeiro presidente do Brasil?',
        options: ['Getúlio Vargas', 'Juscelino Kubitschek', 'Deodoro da Fonseca', 'Lula'],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Qual é a capital da França?',
        options: ['Madrid', 'Paris', 'Roma', 'Berlim'],
        correctAnswer: 1
      }
    ];

    // Retorna as questões como um observable (simula uma requisição)
    return of(questions);
  }
}
