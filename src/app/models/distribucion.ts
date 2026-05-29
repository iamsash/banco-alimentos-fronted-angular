export interface Distribucion {
  id?: number;
  cantidad: number;
  fecha?: string;
  beneficiario: {
    id: number;
    nombre?: string;
  };
  alimento: {
    id: number;
    nombre?: string;
  };
}