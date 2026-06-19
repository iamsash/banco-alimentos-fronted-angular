export interface Donacion {
  id?: number;
  cantidad: number;
  fecha?: string;
  usuario: {
    id: number;
  };
  alimento: {
    id: number;
  };
}