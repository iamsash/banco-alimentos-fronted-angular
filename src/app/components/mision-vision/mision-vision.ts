import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos tu nuevo componente
import { UsuarioCrudComponent } from '../usuario-crud/usuario-crud'; 

@Component({
  selector: 'app-mision-vision',
  standalone: true,
  // Lo agregamos a los imports de este componente
  imports: [CommonModule, UsuarioCrudComponent], 
  templateUrl: './mision-vision.html',
  styleUrl: './mision-vision.css',
})
export class MisionVisionComponent {

  impacto = [
    { icono: '🎁', numero: '100+', descripcion: 'Toneladas rescatadas' },
    { icono: '👥', numero: '5,000+', descripcion: 'Personas beneficiadas' },
    { icono: '🧡', numero: '80+', descripcion: 'Voluntarios' },
    { icono: '🤝', numero: '20+', descripcion: 'Aliados estratégicos' }
  ];
}