import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { DashboardService } from '../../../services/dashboard';
import { DashboardDTO } from '../../../models/dashboard-dto';
import { GraficoComponent } from '../grafico/grafico';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, GraficoComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit, OnDestroy {

  totalAlimentos = 0;
  totalDonaciones = 0;
  totalBeneficiarios = 0;
  totalDistribuciones = 0;
  totalCategorias = 0;
totalAdministradores = 0;

  constructor(
    private dashboardService: DashboardService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    console.log("🟢 CONSTRUCTOR DASHBOARD");
  }

  ngOnInit(): void {

    console.log("🟢 NG ON INIT");

    this.cargarDashboard();

  }

  ngOnDestroy(): void {

    console.log("🔴 NG ON DESTROY");

  }

  cargarDashboard(): void {

    console.log("📡 Llamando al backend...");

    this.dashboardService.obtenerResumen().subscribe({

      next: (data: DashboardDTO) => {

        console.log("✅ Respuesta:", data);

        this.totalAlimentos = data.totalAlimentos;
        this.totalDonaciones = data.totalDonaciones;
        this.totalBeneficiarios = data.totalBeneficiarios;
        this.totalDistribuciones = data.totalDistribuciones;
        this.totalCategorias = data.totalCategorias;
        this.totalAdministradores = data.totalAdministradores;
        this.changeDetectorRef.detectChanges();
        console.log("📦 totalAlimentos =", this.totalAlimentos);

      },

      error: (err) => {

        console.error("❌ Error:", err);

      }

    });

  }

}