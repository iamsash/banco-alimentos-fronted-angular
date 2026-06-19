import { DistribucionDTO } from '../../../models/distribucion-dto';
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Distribucion } from '../../../models/distribucion';
import { Beneficiario } from '../../../models/beneficiario';
import { Alimento } from '../../../models/alimento';

import { DistribucionService } from '../../../services/distribucion';
import { BeneficiarioService } from '../../../services/beneficiario';
import { AlimentoService } from '../../../services/alimento';

@Component({
  selector: 'app-distribuciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './distribuciones.html',
  styleUrl: './distribuciones.css'
})
export class DistribucionesComponent implements OnInit {

  distribucion: Distribucion = {
    cantidad: 0,
    beneficiario: { id: 0 },
    alimento: { id: 0 }
  };

  beneficiarios = signal<Beneficiario[]>([]);
  alimentos = signal<Alimento[]>([]);
  distribuciones = signal<DistribucionDTO[]>([]);

  constructor(
    private distribucionService: DistribucionService,
    private beneficiarioService: BeneficiarioService,
    private alimentoService: AlimentoService
  ) {}

  ngOnInit(): void {

    this.listarBeneficiarios();
    this.listarAlimentos();
    this.listarDistribuciones();

  }

  listarBeneficiarios() {

    this.beneficiarioService.listar().subscribe({
      next: data => this.beneficiarios.set(data),
      error: err => console.error(err)
    });

  }

  listarAlimentos() {

    this.alimentoService.listar().subscribe({
      next: data => this.alimentos.set(data),
      error: err => console.error(err)
    });

  }

  listarDistribuciones() {

    this.distribucionService.listar().subscribe({
      next: data => this.distribuciones.set(data),
      error: err => console.error(err)
    });

  }

  guardarDistribucion() {

    this.distribucionService.guardar(this.distribucion).subscribe({

      next: () => {

        alert('Distribución registrada correctamente');

        this.distribucion = {

          cantidad: 0,
          beneficiario: { id: 0 },
          alimento: { id: 0 }

        };

        this.listarDistribuciones();

      },

      error: err => {

        console.error(err);

        alert('Error al registrar');

      }

    });

  }

}
