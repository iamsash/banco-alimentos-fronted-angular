import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider'; 
import { QuienesSomoscomponent } from '../quienes-somos/quienes-somos';
import { QueHacemosComponent } from '../que-hacemos/que-hacemos';
import { MisionVisionComponent } from '../mision-vision/mision-vision';
import { DonacionImpuestosComponent } from '../donacion-impuestos/donacion-impuestos';
import { DonarComponent } from '../donar/donar';
import { GaleriaComponent } from "../galeria/galeria";


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    SliderComponent,
    QuienesSomoscomponent,
    QueHacemosComponent,
    MisionVisionComponent,
    DonarComponent,
    DonacionImpuestosComponent,
    GaleriaComponent
],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent { }