import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface Usuario {
  id?: number;
  nombre: string;
  email: string;
  telefono: string;
  dni?: string;
  direccion?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/usuarios';

  // Signal principal para cumplir el requisito
  private usuariosState = signal<Usuario[]>([]);
  public usuarios = this.usuariosState.asReadonly();

  async listarUsuarios() {
    try {
      const data = await firstValueFrom(this.http.get<Usuario[]>(this.apiUrl));
      this.usuariosState.set(data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  }

  async guardarUsuario(usuario: Usuario) {
    try {
      await firstValueFrom(this.http.post<Usuario>(this.apiUrl, usuario));
      await this.listarUsuarios();
    } catch (error) {
      console.error('Error al guardar usuario:', error);
    }
  }

  async eliminarUsuario(id: number) {
    try {
      await firstValueFrom(this.http.delete(`${this.apiUrl}/${id}`));
      await this.listarUsuarios();
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  }
}