import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donacion-impuestos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donacion-impuestos.html',
  styleUrl: './donacion-impuestos.css',
})
export class DonacionImpuestosComponent {

  beneficios = [
    'Contribuyes al bienestar de las familias vulnerables.',
    'Recibes beneficios tributarios.',
    'Formas parte de un cambio positivo en la sociedad.'
  ];

}