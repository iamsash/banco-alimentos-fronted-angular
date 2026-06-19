


import { DonacionDTO } from '../../../models/donacion-dto';

import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Donacion } from '../../../models/donacion';
import { Usuario } from '../../../models/usuario';
import { Alimento } from '../../../models/alimento';

import { DonacionService } from '../../../services/donacion';
import { UsuarioService } from '../../../services/usuario';
import { AlimentoService } from '../../../services/alimento';

@Component({
  selector: 'app-donaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donaciones.html',
  styleUrl: './donaciones.css'
})
export class DonacionesComponent implements OnInit {

  donacion: Donacion = {
    cantidad: 0,
    fecha: new Date().toISOString().split('T')[0],
    usuario: { id: 0 },
    alimento: { id: 0 }
  };

  usuarios = signal<Usuario[]>([]);
  alimentos = signal<Alimento[]>([]);
  donaciones = signal<DonacionDTO[]>([]);

  constructor(
    private donacionService: DonacionService,
    private usuarioService: UsuarioService,
    private alimentoService: AlimentoService
  ) {}

  ngOnInit(): void {

    this.listarUsuarios();
    this.listarAlimentos();
    this.listarDonaciones();

  }

  listarUsuarios() {

    this.usuarioService.listar().subscribe({
      next: data => this.usuarios.set(data),
      error: err => console.error(err)
    });

  }

  listarAlimentos() {

    this.alimentoService.listar().subscribe({
      next: data => this.alimentos.set(data),
      error: err => console.error(err)
    });

  }

  listarDonaciones() {

    this.donacionService.listar().subscribe({
      next: data => this.donaciones.set(data),
      error: err => console.error(err)
    });

  }

  guardarDonacion() {

    console.log(this.donacion);

    this.donacionService.guardar(this.donacion).subscribe({

      next: () => {

        alert('Donación registrada correctamente');

        this.donacion = {

          cantidad: 0,
          fecha: new Date().toISOString().split('T')[0],
          usuario: { id: 0 },
          alimento: { id: 0 }

        };

        this.listarDonaciones();

      },

      error: err => {

        console.error(err);

        alert('Error al registrar');

      }

    });

  }

}