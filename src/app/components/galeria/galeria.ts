import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Esto soluciona el warning del *ngFor

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule], // Activamos el módulo aquí
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class GaleriaComponent { 
 fotos = [
    { url: 'assets/images/galeria1.jpg', alt: 'Voluntarios recolectando alimentos' },
    { url: 'assets/images/galeria2.jpg', alt: 'Clasificación de productos' },
    { url: 'assets/images/galeria3.jpg', alt: 'Entrega de donaciones' },
    { url: 'assets/images/galeria4.jpg', alt: 'Equipo del Banco de Alimentos' },
    { url: 'assets/images/galeria5.jpg', alt: 'Comedor beneficiado' },
    { url: 'assets/images/galeria6.jpg', alt: 'Alimentos frescos rescatados' }
  ];
}