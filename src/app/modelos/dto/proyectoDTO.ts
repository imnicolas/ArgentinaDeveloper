import { Tecnologia } from "../tecnologia";
import { PerfilListDTO } from "./perfilListDTO";

export class ProyectoDTO{
  id:number;
  nombre:string;
  img: string;
  descripcion: string;
  demo: string;
  repo: string;
  tecnologias: Tecnologia[];
  perfiles: PerfilListDTO[];
  active:boolean;
}
