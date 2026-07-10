import { Auth } from '../../services/auth';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intranet',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './intranet.html',
  styleUrl: './intranet.css',
})

export class IntranetComponent {
  @Output() loginCorrecto = new EventEmitter<void>();

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

  // Guardar el JWT
  localStorage.setItem('token', respuesta.token);

  // Guardar que el usuario inició sesión
  localStorage.setItem('logueado', 'true');

  // Opcional: guardar datos del usuario
  localStorage.setItem('nombre', respuesta.nombre);
  localStorage.setItem('email', respuesta.email);
  localStorage.setItem('rol', respuesta.rol);

  alert('Bienvenido al panel');

  this.loginCorrecto.emit();
},

      error: (error) => {

        console.error(error);

        alert('Credenciales incorrectas');

      }

    });

  }

}