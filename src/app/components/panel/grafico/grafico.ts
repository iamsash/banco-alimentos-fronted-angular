import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { DashboardService } from '../../../services/dashboard';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafico.html',
  styleUrl: './grafico.css'
})
export class GraficoComponent implements AfterViewInit {

  constructor(
    private dashboardService: DashboardService
  ) {}

  ngAfterViewInit(): void {

    this.dashboardService.obtenerDonacionesPorMes().subscribe({

      next: (data: number[]) => {

        const labels = [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic'
        ];

        new Chart('graficoDonaciones', {

          type: 'bar',

          data: {

            labels: labels,

            datasets: [

              {

                label: 'Donaciones',

                data: data,

                backgroundColor: '#f28c00',

                borderRadius: 8

              }

            ]

          },

          options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

              legend: {

                display: true

              }

            },

            scales: {

              y: {

                beginAtZero: true,

                ticks: {

                  precision: 0

                }

              }

            }

          }

        });

      },

      error: (err) => {

        console.error('Error cargando gráfico', err);

      }

    });

  }

}