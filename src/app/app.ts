import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { SliderComponent } from './components/slider/slider';
import { QuienesSomoscomponent } from './components/quienes-somos/quienes-somos';
import { QueHacemosComponent } from './components/que-hacemos/que-hacemos';
import { MisionVisionComponent } from './components/mision-vision/mision-vision';
import { DonacionImpuestosComponent } from './components/donacion-impuestos/donacion-impuestos';
import { DonarComponent } from './components/donar/donar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SliderComponent, QuienesSomoscomponent, QueHacemosComponent, 
    MisionVisionComponent, DonacionImpuestosComponent, DonarComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}