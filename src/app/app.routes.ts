import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio';
import { UsuarioCrudComponent } from './components/usuario-crud/usuario-crud';

export const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'intranet', component: UsuarioCrudComponent },
  { path: '**', redirectTo: '' }
];