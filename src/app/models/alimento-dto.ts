export interface AlimentoDTO {
  id?: number;
  nombre: string;
  descripcion: string;
  unidadMedida: string;
  fechaRegistro?: string;

  categoriaId?: number;
  categoriaNombre?: string;
}