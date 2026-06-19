
export interface Distribucion {
  id?: number;
  cantidad: number;
  fecha?: string;

  beneficiarioId?: number;
  beneficiarioNombre?: string;

  alimentoId?: number;
  alimentoNombre?: string;

  beneficiario: {
    id: number;
  };

  alimento: {
    id: number;
  };
}