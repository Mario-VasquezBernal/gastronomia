import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: []
})
export class AppComponent {
  constructor(private router: Router) {}

  ingresar() {
    this.router.navigate(['/fichas']);
  }
}
