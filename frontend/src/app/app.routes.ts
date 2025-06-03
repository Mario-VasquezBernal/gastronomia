import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginDocenteComponent } from './login-docente/login-docente.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login-docente', component: LoginDocenteComponent }
];


