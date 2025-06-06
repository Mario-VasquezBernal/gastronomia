import { Component } from '@angular/core';

@Component({
  selector: 'app-fichas',
  standalone: true,
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css'],
})
export class FichasComponent {
  seccion: string = 'panel';

  setSeccion(nombre: string) {
    this.seccion = nombre;
  }
}
