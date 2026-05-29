import { Categoria } from './categoria';

export interface Alimento {
  id?: number;
  nombre: string;
  descripcion: string;
  unidadMedida: string;
  categoria?: Categoria;
}