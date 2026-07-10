import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Donacion } from '../models/donacion';
import { DonacionDTO } from '../models/donacion-dto';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {

  private apiUrl = '/donaciones';

  constructor(private http: HttpClient) {}

  guardar(donacion: Donacion): Observable<Donacion> {
    return this.http.post<Donacion>(this.apiUrl, donacion);
  }

  listar(): Observable<DonacionDTO[]> {
    return this.http.get<DonacionDTO[]>(this.apiUrl);
  }

}