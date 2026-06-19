import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Alimento } from '../../models/alimento';
import { AlimentoService } from '../../services/alimento';

import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario';

import { Donacion } from '../../models/donacion';
import { DonacionService } from '../../services/donacion';

import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria';

import { Beneficiario } from '../../models/beneficiario';
import { BeneficiarioService } from '../../services/beneficiario';

import { Distribucion } from '../../models/distribucion';
import { DistribucionService } from '../../services/distribucion';

import { Inventario } from '../../models/inventario';
import { InventarioService } from '../../services/inventario';

@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './panel-admin.html',
  styleUrl: './panel-admin.css'
})
export class PanelAdminComponent implements OnInit {

  seccionPanel: string = 'dashboard';

  erroresAlimento: any = {};
  erroresDonacion: any = {};

alimento: Alimento = {
  nombre: '',
  descripcion: '',
  unidadMedida: '',
  categoria: {
    id: 0,
    nombre: '',
    descripcion: ''
  }
};

  usuario: Usuario = {
    nombre: '',
    email: '',
    telefono: '',
    fechaRegistro: new Date().toISOString().split('T')[0]
  };

  donacion: Donacion = {
    cantidad: 0,
    fecha: new Date().toISOString().split('T')[0],
    usuario: { id: 0 },
    alimento: { id: 0 }
  };

  categoria: Categoria = {
    nombre: '',
    descripcion: '',
    fechaRegistro: new Date().toISOString().split('T')[0]
  };

  beneficiario: Beneficiario = {
  nombre: '',
  tipo: '',
  direccion: '',
  telefono: '',
  fechaRegistro: new Date().toISOString().split('T')[0]
};

distribucion: Distribucion = {
  cantidad: 0,
  beneficiario: {
    id: 0
  },
  alimento: {
    id: 0
  }
};



  usuarios: Usuario[] = [];
  alimentos: Alimento[] = [];
  categorias: Categoria[] = [];
  beneficiarios: Beneficiario[] = [];
distribuciones: Distribucion[] = [];
inventario: Inventario[] = [];


  constructor(
    private alimentoService: AlimentoService,
    private usuarioService: UsuarioService,
    private donacionService: DonacionService,
    private categoriaService: CategoriaService,
    private beneficiarioService: BeneficiarioService,
    private distribucionService: DistribucionService,
    private inventarioService: InventarioService
  ) {}

  ngOnInit(): void {
    this.listarUsuarios();
    this.listarAlimentos();
    this.listarCategorias();
    this.listarBeneficiarios();
    this.listarDistribuciones();
    this.listarInventario();
  }

  cambiarSeccion(seccion: string) {
    this.seccionPanel = seccion;
  }

  listarUsuarios() {
    this.usuarioService.listar().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (error) => {
        console.error(error);
        alert('Error al cargar usuarios');
      }
    });
  }

  listarAlimentos() {
    this.alimentoService.listar().subscribe({
      next: (data) => {
        this.alimentos = data;
      },
      error: (error) => {
        console.error(error);
        alert('Error al cargar alimentos');
      }
    });
  }

  listarCategorias() {
    this.categoriaService.listar().subscribe({
      next: (data) => {
        this.categorias = data;
      },
      error: (error) => {
        console.error(error);
        alert('Error al cargar categorías');
      }
    });
  }

  listarBeneficiarios() {
  this.beneficiarioService.listar().subscribe({
    next: (data) => {
      this.beneficiarios = data;
    },
    error: (error) => {
      console.error(error);
      alert('Error al cargar beneficiarios');
    }
  });
}

listarDistribuciones() {
  this.distribucionService.listar().subscribe({
    next: (data) => {
      this.distribuciones = data;
    },
    error: (error) => {
      console.error(error);
      alert('Error al cargar distribuciones');
    }
  });
}

listarInventario() {
  this.inventarioService.listar().subscribe({
    next: (data) => {
      this.inventario = data;
    },
    error: (error) => {
      console.error(error);
      alert('Error al cargar inventario');
    }
  });
}


  guardarAlimento() {
    this.erroresAlimento = {};
    this.alimentoService.guardar(this.alimento).subscribe({
      next: (data) => {
        console.log(data);
        alert('Alimento registrado correctamente');

      this.alimento = {
  nombre: '',
  descripcion: '',
  unidadMedida: '',
  categoria: {
    id: 0,
    nombre: '',
    descripcion: ''
  }
};
        this.listarAlimentos();
      },
      error: (error) => {
        if (error.status === 400) {
          this.erroresAlimento = error.error; 
          console.log("Errores de validación:", this.erroresAlimento);
        } else {
          console.error(error);
          alert('Error al registrar alimento');
        }
      }
    });
  }

  guardarUsuario() {
    this.usuarioService.guardar(this.usuario).subscribe({
      next: (data) => {
        console.log(data);
        alert('Donador registrado correctamente');

        this.usuario = {
          nombre: '',
          email: '',
          telefono: '',
          fechaRegistro: new Date().toISOString().split('T')[0]
        };

        this.listarUsuarios();
      },
      error: (error) => {
        console.error(error);
        alert('Error al registrar donador');
      }
    });
  }

  guardarDonacion() {
    this.erroresDonacion = {};
    this.donacionService.guardar(this.donacion).subscribe({
      next: (data) => {
        console.log(data);
        alert('Donación registrada correctamente');

        this.donacion = {
          cantidad: 0,
          fecha: new Date().toISOString().split('T')[0],
          usuario: { id: 0 },
          alimento: { id: 0 }
        };
      },
      error: (error) => {
        if (error.status === 400) {
          this.erroresDonacion = error.error; 
        } else {
          console.error(error);
          alert('Error al registrar donación');
        }
      }
    });
  }

  guardarCategoria() {
    this.categoriaService.crear(this.categoria).subscribe({
      next: (data) => {
        console.log(data);
        alert('Categoría registrada correctamente');

        this.categoria = {
          nombre: '',
          descripcion: '',
          fechaRegistro: new Date().toISOString().split('T')[0]
        };

        this.listarCategorias();
      },
      error: (error) => {
        console.error(error);
        alert('Error al registrar categoría');
      }
    });
  }

  guardarBeneficiario() {
  this.beneficiarioService.guardar(this.beneficiario).subscribe({
    next: (data) => {
      console.log(data);
      alert('Beneficiario registrado correctamente');

      this.beneficiario = {
        nombre: '',
        tipo: '',
        direccion: '',
        telefono: '',
        fechaRegistro: new Date().toISOString().split('T')[0]
      };

      this.listarBeneficiarios();
    },
    error: (error) => {
      console.error(error);
      alert('Error al registrar beneficiario');
    }
  });

  
}


guardarDistribucion() {
  this.distribucionService.guardar(this.distribucion).subscribe({
    next: (data) => {
      console.log(data);
      alert('Distribución registrada correctamente');

      this.distribucion = {
        cantidad: 0,
        beneficiario: { id: 0 },
        alimento: { id: 0 }
      };

      this.listarDistribuciones();
    },
    error: (error) => {
      console.error(error);
      alert('Error al registrar distribución');
    }
  });
}

}
