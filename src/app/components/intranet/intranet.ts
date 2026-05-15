import { Auth } from '../../services/auth';

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

  constructor(private authService: Auth) {}

  login = {
    usuario: '',
    contrasena: '',
    recordar: false
  };

  ingresar() {

    this.authService.login(
      this.login.usuario,
      this.login.contrasena
    ).subscribe({

      next: (respuesta) => {
  console.log('Login correcto', respuesta);

  localStorage.setItem('logueado', 'true');

  alert('Bienvenido al panel');
},

      error: (error) => {

        console.error(error);

        alert('Credenciales incorrectas');

      }

    });

  }

}