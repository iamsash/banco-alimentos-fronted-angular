import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio';
import { HeaderComponent } from './components/header/header';
import { SliderComponent } from './components/slider/slider';
import { QuienesSomoscomponent } from './components/quienes-somos/quienes-somos';
import { QueHacemosComponent } from './components/que-hacemos/que-hacemos';
import { MisionVisionComponent } from './components/mision-vision/mision-vision';
import { DonacionImpuestosComponent } from './components/donacion-impuestos/donacion-impuestos';
import { DonarComponent } from './components/donar/donar';
import { AliadoComponent } from './components/aliado/aliado';
import { BoletinesComponent } from './components/boletines/boletines';
import { VoluntariadoComponent } from './components/voluntariado/voluntariado';
import { CorreoComponent } from './components/correo/correo';
import { IntranetComponent } from './components/intranet/intranet';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SliderComponent, InicioComponent, QuienesSomoscomponent, QueHacemosComponent, 
    MisionVisionComponent, DonacionImpuestosComponent, DonarComponent, 
    AliadoComponent, BoletinesComponent, VoluntariadoComponent,
     CorreoComponent, IntranetComponent, CommonModule, Footer], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {

  seccionActiva: string = 'inicio';

cambiarSeccion(seccion: string) {
  this.seccionActiva = seccion;
}

}

