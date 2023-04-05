import { PerfilDTO } from './../../../../modelos/dto/perfilDTO';
import { ProyectoService } from './../../../../servicios/proyecto.service';
import { Proyecto } from './../../../../modelos/proyecto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tecnologia } from 'src/app/modelos/tecnologia';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';
import { Perfil } from 'src/app/modelos/perfil';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-proyecto-agregar',
  templateUrl: './proyecto-agregar.component.html',
  styleUrls: ['./proyecto-agregar.component.css']
})
export class ProyectoAgregarComponent implements OnInit {
  image="";
  proyecto: Proyecto = new Proyecto();
  tecnologias: Tecnologia[] = [];
  agregarForm!: FormGroup;
  perfiles:PerfilDTO[]=[];

  constructor(private proyectoService:ProyectoService, private router: Router,
    private perfilService: PerfilService,
    private formBuilder: FormBuilder,
    private tecnologiaService: TecnologiaService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.obtenerTecnologias();
    this.obtenerPerfiles();
    this.agregarForm = this.formBuilder.group({
      nombre:[''],
      descripcion:[''],
      img:[''],
      demo:[''],
      repo:[''],
      perfiles:[''],
      tecnologias:['']
      });
  }

  obtenerTecnologias():void{
    this.tecnologiaService.getTecnologias().subscribe(
      data => {
        this.tecnologias = data;
        console.log(data)
      }
    );
  }

  obtenerPerfiles():void{
  this.perfilService.getPerfiles().subscribe(
    data => {
      this.perfiles = data;
    }
  );
  }

  obtener(e:any){
  this.proyecto.img=e[0].base64!;
  console.log( this.proyecto.img)
}
  agregarProyecto():void{
    this.agregarForm.value.img = this.proyecto.img;
    this.proyectoService.createProyectos(this.agregarForm.value).subscribe(
      data => {
        alert("creado con eeeeeeeeexito!")
        this.router.navigate(['admin/proyectos'])
      }
    )
  }

}
