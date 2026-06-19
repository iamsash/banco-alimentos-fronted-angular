import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.css'] // o './login.component.css' según tu archivo
})
export class LoginComponent {
  // 1. Asegúrate de declarar estas variables para el ngModel
  email = '';
  password = '';

  // 2. AGREGA ESTA FUNCIÓN EXACTA QUE BUSCA EL BOTÓN DEL HTML
  login() {
    console.log('Intentando iniciar sesión con:', this.email, this.password);
    
    // Aquí irá luego la llamada a tu AuthService para verificar el rol
  }
}