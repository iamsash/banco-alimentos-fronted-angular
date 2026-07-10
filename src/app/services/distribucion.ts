import { DistribucionDTO } from '../models/distribucion-dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Distribucion } from '../models/distribucion';

@Injectable({
  providedIn: 'root'
})
export class DistribucionService {

  private apiUrl = '/distribuciones';

  constructor(private http: HttpClient) {}

 listar(): Observable<DistribucionDTO[]> {
  return this.http.get<DistribucionDTO[]>(this.apiUrl);
}

  guardar(distribucion: Distribucion): Observable<Distribucion> {
    return this.http.post<Distribucion>(this.apiUrl, distribucion);
  }
}