import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelAdminComponent } from './components/panel-admin/panel-admin';
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
import { RouterOutlet } from '@angular/router';
import { PanelTrabajador } from './components/panel-trabajador/panel-trabajador';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SliderComponent, InicioComponent, QuienesSomoscomponent, QueHacemosComponent, 
    MisionVisionComponent, DonacionImpuestosComponent, DonarComponent, 
    AliadoComponent, BoletinesComponent, VoluntariadoComponent,
     CorreoComponent, IntranetComponent, CommonModule, Footer, RouterOutlet,HeaderComponent,PanelTrabajador
  , PanelAdminComponent], 

  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {

  seccionActiva: string = 'inicio';
  rolUsuario: string = '';

cambiarSeccion(seccion: string) {
  this.seccionActiva = seccion;
}

abrirPanel() {
    const usuarioLogueado = sessionStorage.getItem('usuario');

    if (usuarioLogueado) {
      const usuarioObj = JSON.parse(usuarioLogueado);
      this.rolUsuario = usuarioObj.rol; 
    }

    if (this.rolUsuario === 'ADMIN') {
      this.seccionActiva = 'panel-admin';
    } else if (this.rolUsuario === 'TRABAJADOR') {
      this.seccionActiva = 'panel-trabajador';
    } else {
      this.seccionActiva = 'panel-admin'; 
    }
  }
}






