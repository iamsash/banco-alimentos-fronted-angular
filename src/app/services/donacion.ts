import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donacion } from '../models/donacion';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {

  private apiUrl = 'http://localhost:8080/donaciones';

  constructor(private http: HttpClient) {}

  guardar(donacion: Donacion): Observable<Donacion> {
    return this.http.post<Donacion>(this.apiUrl, donacion);
  }

  listar(): Observable<Donacion[]> {
    return this.http.get<Donacion[]>(this.apiUrl);
  }
}