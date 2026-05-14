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
      descripcion: 'Recuperamos alimentos aptos para el consumo en tiendas, mercados y empresas aliadas.'
    },
    {
      icono: '📦',
      titulo: 'Clasificamos',
      descripcion: 'Verificamos, ordenamos y seleccionamos los alimentos para asegurar su calidad.'
    },
    {
      icono: '🤝',
      titulo: 'Distribuimos',
      descripcion: 'Entregamos alimentos a organizaciones y familias en situación de vulnerabilidad.'
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