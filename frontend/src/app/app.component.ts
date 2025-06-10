import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mensajePersonalizado = '¡Bienvenido a Gastronomía Q74O!';
  constructor(private router: Router) {}

  ingresar() {
    this.router.navigate(['/fichas']);
  }
}
