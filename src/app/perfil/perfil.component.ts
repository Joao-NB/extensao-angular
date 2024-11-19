import { Component } from '@angular/core';
import { faUser, faEdit, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  faUser = faUser;
  faEdit = faEdit;
  faLock = faLock;
  faEnvelope = faEnvelope;

  username: string = 'João Guilherme';
  email: string = 'joao.guilherme@gmail.com';
  score: number = 1500; // Exemplo de score
}
