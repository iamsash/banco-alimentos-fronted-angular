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
}