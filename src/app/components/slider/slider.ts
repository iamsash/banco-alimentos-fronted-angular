import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.html',
  styleUrl: './slider.css'
})
export class SliderComponent {

  indiceActual = 0;

  imagenes: string[] = [
    'assets/images/reporte1.png',
    'assets/images/reporte2.png',
    'assets/images/reporte3.png',
    'assets/images/reporte4.png',
    'assets/images/reporte5.png',
    'assets/images/reporte6.png'
  ];

  siguienteImagen() {
    this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
  }

  anteriorImagen() {
    this.indiceActual =
      (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
  }

  irAImagen(index: number) {
    this.indiceActual = index;
  }
}