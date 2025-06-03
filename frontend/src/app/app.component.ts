import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // Importa RouterOutlet para <router-outlet> en template
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  iniciarDocente() {
    this.router.navigate(['/login-docente']);
  }

  iniciarEstudiante() {
    this.router.navigate(['/login-estudiante']);  // Cambia o crea esta ruta si no existe
  }


}
