import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Alimento } from '../../models/alimento';
import { AlimentoService } from '../../services/alimento';

import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario';

import { Donacion } from '../../models/donacion';
import { DonacionService } from '../../services/donacion';

@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './panel-admin.html',
  styleUrl: './panel-admin.css'
})
export class PanelAdminComponent {

  seccionPanel: string = 'dashboard';

  alimento: Alimento = {
    nombre: '',
    descripcion: '',
    unidadMedida: ''
  };

  usuario: Usuario = {
    nombre: '',
    email: '',
    telefono: '',
    fechaRegistro: new Date().toISOString().split('T')[0]
  };

  donacion: Donacion = {
    cantidad: 0,
    fecha: new Date().toISOString().split('T')[0],
    usuario: {
      id: 0
    },
    alimento: {
      id: 0
    }
  };

  constructor(
    private alimentoService: AlimentoService,
    private usuarioService: UsuarioService,
    private donacionService: DonacionService
  ) {}

  cambiarSeccion(seccion: string) {
    this.seccionPanel = seccion;
  }

  guardarAlimento() {
    this.alimentoService.guardar(this.alimento).subscribe({
      next: (data) => {
        console.log(data);
        alert('Alimento registrado correctamente');

        this.alimento = {
          nombre: '',
          descripcion: '',
          unidadMedida: ''
        };
      },
      error: (error) => {
        console.error(error);
        alert('Error al registrar alimento');
      }
    });
  }

  guardarUsuario() {
    this.usuarioService.guardar(this.usuario).subscribe({
      next: (data) => {
        console.log(data);
        alert('Donador registrado correctamente');

        this.usuario = {
          nombre: '',
          email: '',
          telefono: '',
          fechaRegistro: new Date().toISOString().split('T')[0]
        };
      },
      error: (error) => {
        console.error('ERROR COMPLETO:', error);
        console.error('STATUS:', error.status);
        console.error('MENSAJE:', error.error);
        alert('Error al registrar donador');
      }
    });
  }

  guardarDonacion() {
    this.donacionService.guardar(this.donacion).subscribe({
      next: (data) => {
        console.log(data);
        alert('Donación registrada correctamente');

        this.donacion = {
          cantidad: 0,
          fecha: new Date().toISOString().split('T')[0],
          usuario: {
            id: 0
          },
          alimento: {
            id: 0
          }
        };
      },
      error: (error) => {
        console.error('ERROR COMPLETO:', error);
        console.error('STATUS:', error.status);
        console.error('MENSAJE:', error.error);
        alert('Error al registrar donación');
      }
    });
  }
}