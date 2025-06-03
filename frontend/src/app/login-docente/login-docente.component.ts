import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginDocenteComponent } from './login-docente/login-docente.component';


@Component({
  selector: 'app-login-docente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-docente.component.html',
  styleUrls: ['./login-docente.component.css']
})
export class LoginDocenteComponent {


}
