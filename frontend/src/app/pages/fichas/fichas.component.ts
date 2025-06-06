import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichasService } from '../../services/fichas.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-fichas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css'],
})
export class FichasComponent implements OnInit {
  seccion: string = 'panel';
  fichas: any[] = [];

  constructor(private fichasService: FichasService) {}

  ngOnInit() {
    this.fichasService.getFichas().subscribe((data) => {
      this.fichas = data;
    });
  }

  setSeccion(nombre: string) {
    this.seccion = nombre;
  }
}
