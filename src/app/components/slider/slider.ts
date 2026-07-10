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
    'assets/images/slider/gratamente.png',
    'assets/images/slider/historico_rescate_anual.png',
    'assets/images/slider/historico.png',
    'assets/images/slider/portada.png',
    'assets/images/slider/rescate_de_alimentos.png',
    'assets/images/slider/rescate_mensual_23.png'
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