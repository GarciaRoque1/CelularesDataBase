import {iPrecios} from "./precio"
import {iModelos} from "./modelo"

export interface iCelulares {

  idcelulares: number;
  telefono: string;
  precio: iPrecios;
  modelo: iModelos;
}
