import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // 1. Validamos si se está ejecutando del lado del Cliente (Navegador)
  if (isPlatformBrowser(platformId)) {
    const usuarioLogueado = sessionStorage.getItem('usuario');
    
    if (usuarioLogueado) {
      const usuarioObj = JSON.parse(usuarioLogueado);
      const rol = usuarioObj.rol;

      // Si intenta entrar a trabajador, debe ser ADMIN o TRABAJADOR
      if (state.url.includes('trabajador') && (rol === 'ADMIN' || rol === 'TRABAJADOR')) {
        return true; 
      }
    }

    // Si está en el navegador pero no cumple los roles, lo rebota al inicio
    router.navigate(['/']); 
    return false;
  }

  // 2. Si se ejecuta en el Servidor (SSR), lo dejamos pasar temporalmente para que renderice
  return true;
};