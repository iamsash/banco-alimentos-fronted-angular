import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private apiUrl = '/roles';

  constructor(private http: HttpClient) {}

  listar(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.apiUrl);
  }

}