import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, SliderComponent],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class InicioComponent {

}