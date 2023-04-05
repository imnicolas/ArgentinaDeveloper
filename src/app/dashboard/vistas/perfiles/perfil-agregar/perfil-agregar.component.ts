import { DomSanitizer } from '@angular/platform-browser';
import { Contacto } from './../../../../modelos/contacto';
import { TecnologiaService } from './../../../../servicios/tecnologia.service';
import { Tecnologia } from './../../../../modelos/tecnologia';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/modelos/perfil';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil-agregar',
  templateUrl: './perfil-agregar.component.html',
  styleUrls: ['./perfil-agregar.component.css']
})
export class PerfilAgregarComponent implements OnInit {
  image="";
  perfil: Perfil = new Perfil();
  tecnologias: Tecnologia[]=[];
  agregarForm!: FormGroup;
  contacto: Contacto =  new Contacto();
  url:string;

  constructor(private perfilService:PerfilService, private router:Router,
     private formBuilder:FormBuilder, private tecnologiaService:TecnologiaService) { }

  ngOnInit(): void {
    this.obtenerTecnologias();
    this.agregarForm = this.formBuilder.group({
      nombre:[''],
      ubicacion:[''],
      descripcion:[''],
      img:[''],
      contacto:this.formBuilder.group({
        email:[this.contacto.email],
        github:[this.contacto.github],
        linkedin:[this.contacto.linkedin]
    }),
      portafolio:[''],
      seniority:[''],
      puesto:[''],
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

  agregarPerfil():void{
    const contacto = {
      email: this.contacto.email,
      github: this.contacto.github,
      linkedin: this.contacto.linkedin
    }
    this.agregarForm.get('contacto')!.setValue(contacto);

    this.agregarForm.value.img=this.perfil.img;

  this.perfilService.createPerfil(this.agregarForm.value).subscribe(
    data => {
      alert("creado con eeeeeeeeexito!")
      this.router.navigate(['admin/perfiles'])
    }
  );
  }

  obtener(e:any){
  this.perfil.img=e[0].base64;
    }
}
