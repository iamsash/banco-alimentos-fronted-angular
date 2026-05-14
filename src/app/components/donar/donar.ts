
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donar.html',
  styleUrl: './donar.css',
})
export class DonarComponent {

  opcionesDonacion = [
    { titulo: 'Donar Alimentos' },
    { titulo: 'Donar Dinero' },
    { titulo: 'Padrinaje Solidario' }
  ];

}