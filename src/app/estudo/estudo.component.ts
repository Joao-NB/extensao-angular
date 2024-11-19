import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.css']
})
export class EstudoComponent implements OnInit {
  materia: string = '';
  assunto: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtém os parâmetros da URL
    this.route.params.subscribe(params => {
      this.materia = params['materia'];
      this.assunto = params['assunto'];
    });
  }
}
