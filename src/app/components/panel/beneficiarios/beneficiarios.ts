import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Beneficiario } from '../../../models/beneficiario';
import { BeneficiarioService } from '../../../services/beneficiario';

@Component({
  selector: 'app-beneficiarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './beneficiarios.html',
  styleUrl: './beneficiarios.css'
})
export class BeneficiariosComponent implements OnInit {

  modoEdicion = false;

  beneficiario: Beneficiario = {
    nombre: '',
    tipo: '',
    direccion: '',
    telefono: '',
    fechaRegistro: new Date().toISOString().split('T')[0]
  };

  beneficiarios = signal<Beneficiario[]>([]);

  constructor(
    private beneficiarioService: BeneficiarioService
  ) {}

  ngOnInit(): void {
    this.listarBeneficiarios();
  }

  listarBeneficiarios() {

    this.beneficiarioService.listar().subscribe({

      next: (data) => {
        this.beneficiarios.set(data);
      },

      error: (error) => {
        console.error(error);
        alert('Error al cargar beneficiarios');
      }

    });

  }

  guardarBeneficiario() {

    if (this.modoEdicion) {
      this.actualizarBeneficiario();
      return;
    }

    this.beneficiarioService.guardar(this.beneficiario).subscribe({

      next: () => {

        alert('Beneficiario registrado correctamente');

        this.limpiarFormulario();

        this.listarBeneficiarios();

      },

      error: (error) => {

        console.error(error);

        alert('Error al registrar');

      }

    });

  }

  editarBeneficiario(beneficiario: Beneficiario) {

    this.beneficiario = { ...beneficiario };

    this.modoEdicion = true;

  }

  actualizarBeneficiario() {

    this.beneficiarioService.actualizar(this.beneficiario.id!, this.beneficiario).subscribe({

      next: () => {

        alert('Beneficiario actualizado');

        this.modoEdicion = false;

        this.limpiarFormulario();

        this.listarBeneficiarios();

      },

      error: (error) => {

        console.error(error);

        alert('Error al actualizar');

      }

    });

  }

  eliminarBeneficiario(id:number){

    if(!confirm('¿Eliminar beneficiario?')){
      return;
    }

    this.beneficiarioService.eliminar(id).subscribe({

      next:()=>{

        alert('Beneficiario eliminado');

        this.listarBeneficiarios();

      },

      error:(error)=>{

        console.error(error);

        alert('Error al eliminar');

      }

    });

  }

  limpiarFormulario(){

    this.beneficiario={

      nombre:'',
      tipo:'',
      direccion:'',
      telefono:'',
      fechaRegistro:new Date().toISOString().split('T')[0]

    };

  }

}