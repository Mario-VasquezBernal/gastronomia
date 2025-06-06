import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then(m => m.AppComponent)
  },
  {
    path: 'fichas',
    loadComponent: () =>
      import('./pages/fichas/fichas.component').then(m => m.FichasComponent)
  }
];
