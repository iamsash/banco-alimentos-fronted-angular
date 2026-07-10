import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  // Usar la ruta relativa para que Nginx haga el proxy al backend
  private apiUrl = '/api/auth/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, {
      email,
      password
    });
  }
}