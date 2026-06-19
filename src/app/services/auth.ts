import { Injectable } from '@angular/core';

//sirve para hacer la conexion con el backend y enviar los datos del login
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
// ruta del backend para hacer el login
  private apiUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {

    return this.http.post(this.apiUrl, {
      email: email,
      password: password
    });

  }

  // GUARDAR DATOS DEL USUARIO
  saveSession(data: any): void {
    localStorage.setItem('token', data.token);
    localStorage.setItem('rol', data.rol);
  }

  // OBTENER ROL
  getRol(): string | null {
    return localStorage.getItem('rol');
  }

  // VALIDACIONES DE ROLES
  isAdmin(): boolean {
    return this.getRol() === 'ADMIN';
  }

  isTrabajador(): boolean {
    return this.getRol() === 'TRABAJADOR';
  }

  // LOGOUT
  logout(): void {
    localStorage.clear();
  }
}

