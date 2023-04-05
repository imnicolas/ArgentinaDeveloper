import { Contacto } from "../contacto";
import { ProyectoListDTO } from "./proyectoListDTO";
import { Tecnologia } from "../tecnologia";

export class PerfilDTO{
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
  proyectos: ProyectoListDTO[];
  active:boolean;
}
