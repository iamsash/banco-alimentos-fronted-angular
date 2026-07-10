import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Inventario } from '../../../models/inventario';
import { InventarioService } from '../../../services/inventario';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css'
})
export class InventarioComponent implements OnInit {

  inventario = signal<Inventario[]>([]);

  textoBusqueda = '';
  categoriaBusqueda = '';
  estadoStock = '';

  constructor(private inventarioService: InventarioService) {}

  ngOnInit(): void {
    this.listarInventario();
  }

  listarInventario(): void {

    this.inventarioService.listar().subscribe({

      next: (data: Inventario[]) => {

        console.log('Inventario recibido:', data);

        this.inventario.set(data);

      },

      error: (error) => {

        console.error('Error:', error);

        alert('Error al cargar el inventario');

      }

    });

  }

  get inventarioFiltrado(): Inventario[] {

    return this.inventario().filter(item => {

      const coincideNombre =
        (item.alimentoNombre ?? '')
          .toLowerCase()
          .includes(this.textoBusqueda.toLowerCase());

      const coincideCategoria =
        this.categoriaBusqueda === '' ||
        item.categoriaNombre === this.categoriaBusqueda;

      let coincideEstado = true;

      if (this.estadoStock === 'disponible') {
        coincideEstado = item.stockActual > 0;
      }

      if (this.estadoStock === 'bajo') {
        coincideEstado =
          item.stockActual > 0 &&
          item.stockActual <= 10;
      }

      if (this.estadoStock === 'agotado') {
        coincideEstado = item.stockActual === 0;
      }

      return (
        coincideNombre &&
        coincideCategoria &&
        coincideEstado
      );

    });

  }

  get categoriasUnicas(): string[] {

    return [
      ...new Set(
        this.inventario()
          .map(item => item.categoriaNombre)
          .filter(c => c)
      )
    ].sort();

  }

}