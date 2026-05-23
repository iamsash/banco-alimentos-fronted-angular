import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

  
  busqueda: string = '';

  menuItems = [
    { nombre: 'Inicio', seccion: 'inicio' },
    { nombre: 'Sé Nuestro Aliado', seccion: 'aliado' },
    { nombre: 'Boletines', seccion: 'boletines' },
    { nombre: 'Voluntariado', seccion: 'voluntariado' },
    { nombre: 'Correo', seccion: 'correo' },
    { nombre: 'Intranet', seccion: 'intranet' },
    { nombre: 'Quiénes Somos', seccion: 'quienes-somos' },
    { nombre: 'Qué Hacemos', seccion: 'que-hacemos' },
    { nombre: 'Nuestra Misión y Visión', seccion: 'mision-vision' },
    { nombre: 'Donación Por Impuestos', seccion: 'donacion-impuestos' },
    { nombre: 'Donar', seccion: 'donar' }
  ];

  mostrarSeccion(seccion: string) {
    console.log('Sección seleccionada:', seccion);
    
    this.menuAbierto.set(false);
  }

  filtrarMenu() {
    return this.menuItems.filter(item =>
      item.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  
  menuAbierto = signal(false);

  toggleMenu() {
    this.menuAbierto.update(valor => !valor);
  }
}