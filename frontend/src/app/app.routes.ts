import { Routes } from '@angular/router';
import { FichasComponent } from './pages/fichas/fichas.component';

export const routes: Routes = [
  { path: '', redirectTo: '/fichas', pathMatch: 'full' },  // redirige raíz a /fichas
  { path: 'fichas', component: FichasComponent },
  // otras rutas aquí...
];
