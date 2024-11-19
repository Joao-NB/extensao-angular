import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { LucideIconProvider } from 'lucide-angular';
//import {LucideAngularModule, Notebook, Library, ArrowRight} from "lucide-angular";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBook, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LoginComponent } from './login/login.component';
import { EstudoComponent } from './estudo/estudo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule, LoginComponent, EstudoComponent, CadastroComponent, PerfilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'extensao';
  faBars = faBars;
  faBook = faBook;
  faArrowRight = faArrowRight;
}
