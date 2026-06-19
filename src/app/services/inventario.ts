import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventario } from '../models/inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private apiUrl = 'http://localhost:8080/inventario';

  constructor(private http: HttpClient) {}

  listar(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.apiUrl);
  }
}