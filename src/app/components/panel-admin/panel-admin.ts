import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../panel/dashboard/dashboard';
import { AlimentosComponent } from '../panel/alimentos/alimentos';
import { CategoriasComponent } from '../panel/categorias/categorias';
import { DonadoresComponent } from '../panel/donadores/donadores';
import { BeneficiariosComponent } from '../panel/beneficiarios/beneficiarios';
import { DonacionesComponent } from '../panel/donaciones/donaciones';
import { DistribucionesComponent } from '../panel/distribuciones/distribuciones';
import { InventarioComponent } from '../panel/inventario/inventario';
import { AdministradoresComponent } from '../panel/administradores/administradores';
@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [
    CommonModule,
    DashboardComponent,
    AlimentosComponent,
    CategoriasComponent,
    DonadoresComponent,
    BeneficiariosComponent,
    DonacionesComponent,
    DistribucionesComponent,
    InventarioComponent,
    AdministradoresComponent
  ],
  templateUrl: './panel-admin.html',
  styleUrl: './panel-admin.css'
})
export class PanelAdminComponent {

  seccionPanel: string = 'dashboard';

  cambiarSeccion(seccion: string): void {
    this.seccionPanel = seccion;
  }

}