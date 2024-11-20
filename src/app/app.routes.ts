import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EstudoComponent } from './estudo/estudo.component.spec';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'estudo',
    component: EstudoComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  }
];
