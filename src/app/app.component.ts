import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { LucideIconProvider } from 'lucide-angular';
//import {LucideAngularModule, Notebook, Library, ArrowRight} from "lucide-angular";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBook, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'extensao';
  faBars = faBars;
  faBook = faBook;
  faArrowRight = faArrowRight;
}
