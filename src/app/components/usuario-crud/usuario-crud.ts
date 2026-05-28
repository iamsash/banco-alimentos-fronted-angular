import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService, Usuario } from '../../services/usuario';

@Component({
  selector: 'app-usuario-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-crud.html', 
  styleUrl: './usuario-crud.css'      
})
export class UsuarioCrudComponent implements OnInit {
  private usuarioService = inject(UsuarioService);

  usuarios = this.usuarioService.usuarios;

  nuevoUsuario = signal<Usuario>({
    nombre: '',
    email: '',
    telefono: '',
    dni: '',
    direccion: ''
  });

  ngOnInit() {
    this.usuarioService.listarUsuarios();
  }

  async registrar() {
    const user = this.nuevoUsuario();
    if (user.nombre && user.email) {
      await this.usuarioService.guardarUsuario(user);
      this.nuevoUsuario.set({ nombre: '', email: '', telefono: '', dni: '', direccion: '' });
    }
  }

  async borrar(id?: number) {
    if (id) {
      await this.usuarioService.eliminarUsuario(id);
    }
  }
}