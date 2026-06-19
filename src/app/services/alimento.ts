import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alimento } from '../models/alimento';

@Injectable({
  providedIn: 'root',
})
export class AlimentoService {

  private apiUrl = 'http://localhost:8080/alimentos';

  constructor(private http: HttpClient) {}

  guardar(alimento: Alimento): Observable<Alimento> {
    return this.http.post<Alimento>(this.apiUrl, alimento);
  }

  listar(): Observable<Alimento[]> {
    return this.http.get<Alimento[]>(this.apiUrl);
  }

  actualizar(id: number, alimento: Alimento): Observable<Alimento> {
    return this.http.put<Alimento>(`${this.apiUrl}/${id}`, alimento);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}