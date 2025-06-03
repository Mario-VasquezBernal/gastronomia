import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importa tus componentes aquí
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginDocenteComponent } from './login-docente/login-docente.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginDocenteComponent,
    // otros componentes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
