import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Categoria } from '../../../models/categoria';
import { CategoriaService } from '../../../services/categoria';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class CategoriasComponent implements OnInit {

  modoEdicion = false;
  textoBusqueda = '';

  categoria: Categoria = {
    nombre: '',
    descripcion: '',
    fechaRegistro: new Date().toISOString().split('T')[0]
  };

  categorias = signal<Categoria[]>([]);

  constructor(
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias() {

    this.categoriaService.listar().subscribe({

      next: (data) => {
        this.categorias.set(data);
      },

      error: (error) => {
        console.error(error);
        alert('Error al cargar categorías');
      }

    });

  }

  guardarCategoria() {

    if (this.modoEdicion) {
      this.actualizarCategoria();
      return;
    }

    this.categoriaService.crear(this.categoria).subscribe({

      next: () => {

        alert('Categoría registrada correctamente');

        this.limpiarFormulario();

        this.listarCategorias();

      },

      error: (error) => {

        console.error(error);

        alert('Error al registrar categoría');

      }

    });

  }

  editarCategoria(categoria: Categoria) {

    this.categoria = {

      id: categoria.id,

      nombre: categoria.nombre,

      descripcion: categoria.descripcion,

      fechaRegistro: categoria.fechaRegistro

    };

    this.modoEdicion = true;

  }

  actualizarCategoria() {

    this.categoriaService.actualizar(this.categoria.id!, this.categoria).subscribe({

      next: () => {

        alert('Categoría actualizada');

        this.modoEdicion = false;

        this.limpiarFormulario();

        this.listarCategorias();

      },

      error: (error) => {

        console.error(error);

        alert('Error al actualizar categoría');

      }

    });

  }

  eliminarCategoria(id: number) {

    if (!confirm('¿Eliminar categoría?')) {
      return;
    }

    this.categoriaService.eliminar(id).subscribe({

      next: () => {

        alert('Categoría eliminada');

        this.listarCategorias();

      },

      error: (error) => {

        console.error(error);

        alert('Error al eliminar categoría');

      }

    });

  }

  limpiarFormulario() {

    this.categoria = {

      nombre: '',

      descripcion: '',

      fechaRegistro: new Date().toISOString().split('T')[0]

    };

  }

  get categoriasFiltradas(): Categoria[] {

    if (!this.textoBusqueda) {
      return this.categorias();
    }

    const texto = this.textoBusqueda.toLowerCase();

    return this.categorias().filter(categoria =>
      categoria.nombre.toLowerCase().includes(texto) ||
      categoria.descripcion.toLowerCase().includes(texto)
    );

  }

}