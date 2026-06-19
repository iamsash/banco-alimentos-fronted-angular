import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boletines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boletines.html',
  styleUrl: './boletines.css',
})
export class BoletinesComponent {

  boletines = [

    {
      imagen: 'assets/images/boletines/BANCO-DE-ALIMENTOS.jpg',
      alt: 'alimentos',
      color: 'boletin-azul',
      texto: 'Recibimos diariamente donaciones de Plaza Vea de Cajamarca. Un gran aliado para luchar contra el desperdicio de alimentos y contribuir al hambre cero.'
    },

    {
      imagen: 'assets/images/boletines/chakipaSmall1.png',
      alt: 'mercado',
      color: 'boletin-rojo',
      texto: 'Contribuimos al Programa Social "Chakipà" de Cáritas de Cajamarca en el reparto de 600 kits de alimentos a familias vulnerables.'
    },

    {
      imagen: 'assets/images/boletines/comedoresSmall.png',
      alt: 'comedor',
      color: 'boletin-morado',
      texto: 'El comedor "Padre Daniele B." forma parte de los Comedores Solidarios que brindan gratuitamente desayunos y almuerzos.'
    },

    {
      imagen: 'assets/images/boletines/niños.png',
      alt: 'casas solidarias',
      color: 'boletin-amarillo',
      texto: 'Entregamos donaciones semanales de alimentos a Casas Solidarias dedicadas al cuidado de personas vulnerables.'
    }

  ];

}
