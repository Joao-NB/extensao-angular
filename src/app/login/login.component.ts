import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin(): void {
    console.log('E-mail:', this.email);
    console.log('Senha:', this.password);
  }
}
