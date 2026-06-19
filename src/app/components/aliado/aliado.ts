import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aliado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aliado.html',
  styleUrl: './aliado.css',
})
export class AliadoComponent {

  formulario = {
    empresa: '',
    contacto: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  enviarFormulario() {
    console.log(this.formulario);
  }

}