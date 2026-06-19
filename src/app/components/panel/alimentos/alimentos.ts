import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Alimento } from '../../../models/alimento';
import { Categoria } from '../../../models/categoria';

import { AlimentoService } from '../../../services/alimento';
import { CategoriaService } from '../../../services/categoria';

@Component({
  selector: 'app-alimentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alimentos.html',
  styleUrl: './alimentos.css'
})
export class AlimentosComponent implements OnInit {

  modoEdicion = false;

  alimento: Alimento = {
    nombre: '',
    descripcion: '',
    unidadMedida: '',
    categoria: {
      id: 0,
      nombre: '',
      descripcion: ''
    }
  };

  alimentos = signal<Alimento[]>([]);
  categorias = signal<Categoria[]>([]);

  constructor(
    private alimentoService: AlimentoService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.listarAlimentos();
    this.listarCategorias();
  }

  listarAlimentos() {

    this.alimentoService.listar().subscribe({

      next: (data) => {
        this.alimentos.set(data);
      },

      error: (error) => {
        console.error(error);
        alert('Error al cargar alimentos');
      }

    });

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

  guardarAlimento() {

    if (this.modoEdicion) {
      this.actualizarAlimento();
      return;
    }

    this.alimentoService.guardar(this.alimento).subscribe({

      next: () => {

        alert('Alimento registrado correctamente');

        this.limpiarFormulario();

        this.listarAlimentos();

      },

      error: (error) => {

        console.error(error);

        alert('Error al registrar alimento');

      }

    });

  }

  editarAlimento(alimento: Alimento) {

    this.alimento = {

      id: alimento.id,

      nombre: alimento.nombre,

      descripcion: alimento.descripcion,

      unidadMedida: alimento.unidadMedida,

      categoria: alimento.categoria

    };

    this.modoEdicion = true;

  }

  actualizarAlimento() {

    this.alimentoService.actualizar(this.alimento.id!, this.alimento).subscribe({

      next: () => {

        alert('Alimento actualizado');

        this.modoEdicion = false;

        this.limpiarFormulario();

        this.listarAlimentos();

      },

      error: (error) => {

        console.error(error);

        alert('Error al actualizar');

      }

    });

  }

  eliminarAlimento(id: number) {

    if (!confirm('¿Eliminar alimento?')) {
      return;
    }

    this.alimentoService.eliminar(id).subscribe({

      next: () => {

        alert('Alimento eliminado');

        this.listarAlimentos();

      },

      error: (error) => {

        console.error(error);

        alert('Error al eliminar');

      }

    });

  }

  limpiarFormulario() {

    this.alimento = {

      nombre: '',

      descripcion: '',

      unidadMedida: '',

      categoria: {

        id: 0,

        nombre: '',

        descripcion: ''

      }

    };

  }

}