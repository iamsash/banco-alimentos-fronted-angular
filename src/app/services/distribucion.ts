import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Distribucion } from '../models/distribucion';

@Injectable({
  providedIn: 'root'
})
export class DistribucionService {

  private apiUrl = 'http://localhost:8080/distribuciones';

  constructor(private http: HttpClient) {}

  listar(): Observable<Distribucion[]> {
    return this.http.get<Distribucion[]>(this.apiUrl);
  }

  guardar(distribucion: Distribucion): Observable<Distribucion> {
    return this.http.post<Distribucion>(this.apiUrl, distribucion);
  }
}