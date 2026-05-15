import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intranet',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './intranet.html',
  styleUrl: './intranet.css',
})
export class IntranetComponent {

  login = {
    usuario: '',
    contrasena: '',
    recordar: false
  };

  ingresar() {
    console.log(this.login);
  }

}