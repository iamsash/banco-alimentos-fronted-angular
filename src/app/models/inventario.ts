export interface Inventario {
  alimentoId: number;
  alimentoNombre: string;
  categoriaNombre: string;
  unidadMedida: string;
  totalDonado: number;
  totalDistribuido: number;
  stockActual: number;
}