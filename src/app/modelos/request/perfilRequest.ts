import { Contacto } from "../contacto";
import { Tecnologia } from "../tecnologia";

export class PerfilRequest{
  constructor(){
    this.contacto = new Contacto();
  }
  id:number;
  nombre: string;
  ubicacion: string;
  img: string;
  seniority: string;
  puesto: string;
  descripcion: string;
  portafolio: string;
  contacto: Contacto;
  tecnologias: Tecnologia[];
}
