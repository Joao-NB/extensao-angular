import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { faBars, faBook, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importando FontAwesomeModule diretamente no componente

@Component({
  selector: 'app-estudo',
  standalone: true,
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.css'],
  imports: [FontAwesomeModule] 
})

export class EstudoComponent implements OnInit {
  materia: string = '';
  assunto: string = '';
  title = 'extensao';
  faBars = faBars;
  faBook = faBook;
  faArrowRight = faArrowRight;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtém os parâmetros da URL
    this.route.params.subscribe(params => {
      this.materia = params['materia'];
      this.assunto = params['assunto'];
    });
  }
}
