import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginDocenteComponent } from './login-docente/login-docente.component';
import { DetallesComponent } from './detalles/detalles.component'; // Si tienes este componente

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login-docente', component: LoginDocenteComponent },
  { path: 'detalles', component: DetallesComponent }
  // Si tienes otro componente llamado LoginComponent, inclúyelo aquí con otra ruta
  // { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
