import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficiario } from '../models/beneficiario';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {

  private apiUrl = '/beneficiarios';

  constructor(private http: HttpClient) {}

  listar(): Observable<Beneficiario[]> {
    return this.http.get<Beneficiario[]>(this.apiUrl);
  }

  guardar(beneficiario: Beneficiario): Observable<Beneficiario> {
    return this.http.post<Beneficiario>(this.apiUrl, beneficiario);
  }

  actualizar(id: number, beneficiario: Beneficiario): Observable<Beneficiario> {
    return this.http.put<Beneficiario>(`${this.apiUrl}/${id}`, beneficiario);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}