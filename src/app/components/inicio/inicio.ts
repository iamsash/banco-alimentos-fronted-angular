import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, SliderComponent],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class InicioComponent implements OnInit, OnDestroy {

  constructor(private cdr: ChangeDetectorRef) {}

  aliados: string[] = [
    'assets/images/aliados/megaplaza.webp',
    'assets/images/aliados/caritas_del_peru.jpg',
    'assets/images/aliados/churrasqueria.jpg',
    'assets/images/aliados/el_asador.jpg',
    'assets/images/aliados/grupo_huamani.jpg',
    'assets/images/aliados/huamanigroup.jpg',
    'assets/images/aliados/oratoria_don_bosco.jpg',
    'assets/images/aliados/sunshine.jpg',
    'assets/images/aliados/calidez_andina.jpg',
    'assets/images/aliados/asadorimg.jpg',
    'assets/images/aliados/artesanos_don_bosco.jpg',
    'assets/images/aliados/aereopuerto.jpg'
  ];

  indiceAliado = 0;

  private intervaloAliados!: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    console.log('InicioComponent cargado');
    this.iniciarSliderAliados();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervaloAliados);
  }

  iniciarSliderAliados(): void {

    this.intervaloAliados = setInterval(() => {

      this.indiceAliado++;

      if (this.indiceAliado >= this.aliados.length) {
        this.indiceAliado = 0;
      }

      console.log('Índice:', this.indiceAliado);

      // Fuerza la actualización de la vista
      this.cdr.detectChanges();

    }, 4000); // 1 segundo para probar

  }

}