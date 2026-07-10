import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = '/admins';

  constructor(private http: HttpClient) {}

  listar(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl);
  }

  guardar(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.apiUrl, admin);
  }

  actualizar(id: number, admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.apiUrl}/${id}`, admin);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}