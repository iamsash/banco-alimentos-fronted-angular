import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-que-hacemos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './que-hacemos.html',
  styleUrl: './que-hacemos.css',
})
export class QueHacemosComponent {

  acciones = [
    {
      icono: '🚚',
      titulo: 'Rescatamos',
      descripcion: 'Rescatamos alimentos en perfecto estado de empresas, supermercados, mercados y campos agrícolas antes de que sean desechados.'
    },
    {
      icono: '📦',
      titulo: 'Clasificamos',
      descripcion: 'Nuestros voluntarios revisan, seleccionan y almacenan cuidadosamente los productos bajo estrictos estándares de calidad y sanidad.'
    },
    {
      icono: '🤝',
      titulo: 'Distribuimos',
      descripcion: 'Entregamos los alimentos de manera equitativa a organizaciones sociales, comedores y familias en situación de vulnerabilidad.'
    },
    {
      icono: '❤️',
      titulo: 'Ayudamos',
      descripcion: 'Trabajamos con voluntarios y aliados para reducir el hambre y el desperdicio.'
    }
  ];

  impacto = [
    { numero: '100+', descripcion: 'Toneladas rescatadas' },
    { numero: '5,000+', descripcion: 'Personas beneficiadas' },
    { numero: '80+', descripcion: 'Voluntarios' },
    { numero: '20+', descripcion: 'Aliados estratégicos' }
  ];
}