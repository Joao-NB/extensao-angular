import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  email: string = '';
  password: string = '';

  onLogin(): void {
    console.log('E-mail:', this.email);
    console.log('Senha:', this.password);
  }
}
