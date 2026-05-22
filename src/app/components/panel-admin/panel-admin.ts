import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

  import { Alimento } from '../../models/alimento';
 import { AlimentoService } from '../../services/alimento';

import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario';

@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './panel-admin.html',
  styleUrl: './panel-admin.css'
})
export class PanelAdminComponent {

  alimento: Alimento = {
    nombre: '',
    descripcion: '',
    unidadMedida: ''
  };

  user: Usuario = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  };

  constructor(private alimentoService: AlimentoService, private usuarioService: UsuarioService) {}

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
  this.usuarioService.guardar(this.user).subscribe({
    next: () => alert('Usuario registrado correctamente'),
    error: (error) => console.error(error)
  });
}
} 