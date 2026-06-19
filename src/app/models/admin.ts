import { Rol } from './rol';

export interface Admin {

  id?: number;

  nombre: string;

  email: string;

  password: string;

  rol: Rol;

}