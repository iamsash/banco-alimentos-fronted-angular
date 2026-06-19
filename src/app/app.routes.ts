import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { PanelTrabajador } from './components/panel-trabajador/panel-trabajador';

export const routes: Routes = [
  {
    path: 'trabajador',
    component: PanelTrabajador,
    canActivate: [authGuard]
  }
];