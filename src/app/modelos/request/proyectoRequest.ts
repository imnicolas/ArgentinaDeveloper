import { Tecnologia } from 'src/app/modelos/tecnologia';
export class ProyectoRequest{
    constructor(id: number, nombre:string, img:string, descripcion:string, demo:string, repo:string, perfilesID:number[], tecnologias:Tecnologia[],active:boolean){
      this.id =  id;
      this.nombre = nombre;
  this.img =  img;
  this.descripcion= descripcion;
  this.demo=demo;
  this.repo=repo;
  this.perfilesId=perfilesID;
  this.tecnologias=tecnologias;
  this.active=active;
    }
  id:number;
  nombre:string;
  img:string;
  descripcion:string;
  demo:string;
  repo:string;
  perfilesId:number[];
  tecnologias: Tecnologia[];
  active: boolean;
}
