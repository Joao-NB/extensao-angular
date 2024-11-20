import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faBook,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterOutlet],
  templateUrl: './navegacao.component.html',
  styleUrl: './navegacao.component.css',
})
export class NavegacaoComponent {
  faBars = faBars;
  faBook = faBook;
  faArrowRight = faArrowRight;
}
