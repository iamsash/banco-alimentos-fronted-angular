import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Admin } from '../../../models/admin';
import { Rol } from '../../../models/rol';

import { AdminService } from '../../../services/admin';
import { RolService } from '../../../services/rol';

@Component({
  selector: 'app-administradores',
  imports: [CommonModule, FormsModule],
  templateUrl: './administradores.html',
  styleUrl: './administradores.css'
})
export class AdministradoresComponent implements OnInit {

  modoEdicion = false;

  admin: Admin = {
    nombre: '',
    email: '',
    password: '',
    rol: {
      id: 0,
      nombre: '',
      descripcion: ''
    }
  };

  administradores = signal<Admin[]>([]);
  roles = signal<Rol[]>([]);

  constructor(
    private adminService: AdminService,
    private rolService: RolService
  ) {}

  ngOnInit(): void {

    this.listarAdministradores();
    this.listarRoles();

  }

  listarAdministradores() {

    this.adminService.listar().subscribe({

      next: data => this.administradores.set(data),

      error: err => {
        console.error(err);
        alert('Error al cargar administradores');
      }

    });

  }

  listarRoles() {

    this.rolService.listar().subscribe({

      next: data => this.roles.set(data),

      error: err => {
        console.error(err);
        alert('Error al cargar roles');
      }

    });

  }

  guardarAdministrador() {

    if (this.modoEdicion) {

      this.actualizarAdministrador();
      return;

    }

    this.adminService.guardar(this.admin).subscribe({

      next: () => {

        alert('Administrador registrado correctamente');

        this.limpiarFormulario();

        this.listarAdministradores();

      },

      error: err => {

        console.error(err);

        alert('Error al registrar');

      }

    });

  }

  editarAdministrador(admin: Admin) {

    this.admin = {

      id: admin.id,

      nombre: admin.nombre,

      email: admin.email,

      password: admin.password,

      rol: admin.rol

    };

    this.modoEdicion = true;

  }

  actualizarAdministrador() {

    this.adminService.actualizar(this.admin.id!, this.admin).subscribe({

      next: () => {

        alert('Administrador actualizado');

        this.modoEdicion = false;

        this.limpiarFormulario();

        this.listarAdministradores();

      },

      error: err => {

        console.error(err);

        alert('Error al actualizar');

      }

    });

  }

  eliminarAdministrador(id: number) {

    if (!confirm('¿Desea eliminar este administrador?')) {
      return;
    }

    this.adminService.eliminar(id).subscribe({

      next: () => {

        alert('Administrador eliminado');

        this.listarAdministradores();

      },

      error: err => {

        console.error(err);

        alert('Error al eliminar');

      }

    });

  }

  limpiarFormulario() {

    this.admin = {

      nombre: '',

      email: '',

      password: '',

      rol: {

        id: 0,

        nombre: '',

        descripcion: ''

      }

    };

  }

}