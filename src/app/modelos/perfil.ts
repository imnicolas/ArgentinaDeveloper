import { Contacto } from './contacto';
import { Proyecto } from './proyecto';
import { Tecnologia } from './tecnologia';

export class Perfil {

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
  proyectos: Proyecto[];
  active:boolean;
}
