import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Inventario } from '../../../models/inventario';
import { InventarioService } from '../../../services/inventario';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css'
})
export class InventarioComponent implements OnInit {

  inventario = signal<Inventario[]>([]);

  constructor(
    private inventarioService: InventarioService
  ) {}

  ngOnInit(): void {
    this.listarInventario();
  }

  listarInventario() {

    this.inventarioService.listar().subscribe({

      next: (data) => {

        this.inventario.set(data);

      },

      error: (error) => {

        console.error(error);

        alert('Error al cargar el inventario');

      }

    });

  }

}