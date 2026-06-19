import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voluntariado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voluntariado.html',
  styleUrl: './voluntariado.css',
})
export class VoluntariadoComponent {

  ayudas = [
    'Seleccionar los alimentos donados',
    'Distribuir alimentos a albergues y comedores solidarios',
    'Buscar más donantes para ampliar nuestro impacto'
  ];

}