import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mision-vision',
  standalone: true,
  imports: [CommonModule], 
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