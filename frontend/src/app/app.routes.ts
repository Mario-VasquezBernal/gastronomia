import { Routes } from '@angular/router';
import { FichasComponent } from './pages/fichas/fichas.component';

export const routes: Routes = [
  { path: 'fichas', component: FichasComponent },
  { path: '', redirectTo: 'fichas', pathMatch: 'full' } // opcional
];
  