import { Perfil } from './perfil';
import { Tecnologia } from './tecnologia';
export class Proyecto{
  id:number;
  nombre:string;
  img: string;
  descripcion: string;
  demo: string;
  repo: string;
  tecnologias: Tecnologia[];
  perfiles: Perfil[];
  active:boolean;
}
