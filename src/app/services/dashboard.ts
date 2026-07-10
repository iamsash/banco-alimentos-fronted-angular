import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DashboardDTO } from '../models/dashboard-dto';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  // Ruta relativa para que Nginx redirija al backend
  private apiUrl = '/dashboard';

  constructor(private http: HttpClient) { }

  obtenerResumen(): Observable<DashboardDTO> {
    return this.http.get<DashboardDTO>(`${this.apiUrl}/resumen`);
  }

  obtenerDonacionesPorMes(): Observable<any[]> {
    return this.http.get<any[]>('/donaciones/estadisticas/mes');
  }

}