import { PerfilDTO } from './../../../../modelos/dto/perfilDTO';
import { ProyectoDTO } from './../../../../modelos/dto/proyectoDTO';
import { TecnologiaService } from './../../../../servicios/tecnologia.service';
import { Proyecto } from './../../../../modelos/proyecto';
import { Router } from '@angular/router';
import { ProyectoService } from './../../../../servicios/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/modelos/tecnologia';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { Perfil } from 'src/app/modelos/perfil';
import { ProyectoRequest } from 'src/app/modelos/request/proyectoRequest';

@Component({
  selector: 'app-proyecto-editar',
  templateUrl: './proyecto-editar.component.html',
  styleUrls: ['./proyecto-editar.component.css']
})
export class ProyectoEditarComponent implements OnInit {
  image="";
  proyecto: ProyectoDTO = new Proyecto();
  tecnologias: Tecnologia[] = [];
  t: Tecnologia[] = [];
  perfiles: PerfilDTO[] = [];

  constructor(private proyectoService: ProyectoService, private router: Router,
    private tecnologiaService: TecnologiaService, private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.obtenerProyecto();
    this.obtenerTecnologias();
    this.obtenerPerfiles();
  }

  obtenerProyecto(): void {
    let id = localStorage.getItem('idProyecto');
    this.proyectoService.getProyectoById(+id!).subscribe(
      data => {
        this.proyecto = data;
        console.log(this.proyecto)
      }
    );
  }
  obtener(e:any){
    this.image=e[0].base64!;
    this.proyecto.img=e[0].base64!;
    console.log(this.proyecto.img)
  }

  compareFn(user1: Tecnologia, user2: Tecnologia) {
    return user1 && user2 ? user1.id === user2.id : user1 === user2;
  }
  comparePerfiles(user1: PerfilDTO, user2: PerfilDTO) {
    return user1 && user2 ? user1.id === user2.id : user1 === user2;
  }

  obtenerTecnologias(): void {
    this.tecnologiaService.getTecnologias().subscribe(
      data => {
        this.tecnologias = data;
        console.log(data)
      }
    );
  }

  obtenerPerfiles(): void {
    this.perfilService.getPerfiles().subscribe(
      data => {
        this.perfiles = data;
      });
  }

  editarProyecto(proyecto: ProyectoDTO) {
    var proyectoRequest = new ProyectoRequest(0, "", "", "", "", "", [0], this.t, true);
    this.proyecto.img=this.image;
    proyectoRequest.nombre =  proyecto.nombre;
    proyectoRequest.descripcion =  proyecto.descripcion;
    proyecto.perfiles.forEach(element => {
      proyectoRequest.perfilesId.push(element.id)!;
    })
    proyecto.tecnologias.forEach(element => {
      proyectoRequest.tecnologias.push(element)!;
    })
    proyectoRequest.repo = proyecto.repo;
    proyectoRequest.active =  proyecto.active;
    proyectoRequest.demo =  proyecto.demo;
    proyectoRequest.id =  proyecto.id;
    proyectoRequest.img =  this.proyecto.img
    let id = localStorage.getItem('idProyecto');
    console.log("anda?")
    this.proyectoService.updateProyectos(+id, proyectoRequest).subscribe(
      data => {
        alert('editado con exito')
        this.router.navigate(['/admin/proyectos'])
      }
    );
  }
}
