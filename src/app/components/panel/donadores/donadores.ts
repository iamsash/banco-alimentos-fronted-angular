import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Usuario } from '../../../models/usuario';
import { UsuarioService } from '../../../services/usuario';

@Component({
  selector: 'app-donadores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donadores.html',
  styleUrl: './donadores.css'
})
export class DonadoresComponent implements OnInit {

  modoEdicion = false;

  usuario: Usuario = {
    nombre: '',
    email: '',
    telefono: '',
    fechaRegistro: new Date().toISOString().split('T')[0]
  };

  usuarios = signal<Usuario[]>([]);

  constructor(
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {

    this.usuarioService.listar().subscribe({

      next: (data) => {

        this.usuarios.set(data);

      },

      error: (error) => {

        console.error(error);

        alert('Error al cargar donadores');

      }

    });

  }

  guardarUsuario() {

    if (this.modoEdicion) {

      this.actualizarUsuario();

      return;

    }

    this.usuarioService.guardar(this.usuario).subscribe({

      next: () => {

        alert('Donador registrado correctamente');

        this.limpiarFormulario();

        this.listarUsuarios();

      },

      error: (error) => {

        console.error(error);

        alert('Error al registrar donador');

      }

    });

  }

  editarUsuario(usuario: Usuario) {

    this.usuario = { ...usuario };

    this.modoEdicion = true;

  }

  actualizarUsuario() {

    this.usuarioService.actualizar(this.usuario.id!, this.usuario).subscribe({

      next: () => {

        alert('Donador actualizado');

        this.modoEdicion = false;

        this.limpiarFormulario();

        this.listarUsuarios();

      },

      error: (error) => {

        console.error(error);

        alert('Error al actualizar');

      }

    });

  }

  eliminarUsuario(id: number) {

    if (!confirm('¿Eliminar donador?')) {

      return;

    }

    this.usuarioService.eliminar(id).subscribe({

      next: () => {

        alert('Donador eliminado');

        this.listarUsuarios();

      },

      error: (error) => {

        console.error(error);

        alert('Error al eliminar');

      }

    });

  }

  limpiarFormulario() {

    this.usuario = {

      nombre: '',

      email: '',

      telefono: '',

      fechaRegistro: new Date().toISOString().split('T')[0]

    };

  }

}