import { PerfilDTO } from './../../../../modelos/dto/perfilDTO';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/modelos/perfil';
import { Tecnologia } from 'src/app/modelos/tecnologia';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.css']
})
export class PerfilEditarComponent implements OnInit {
  image="";
  perfil: PerfilDTO = new Perfil();
  tecnologias: Tecnologia[]=[];

  constructor(private perfilService:PerfilService, private router:Router,
    private tecnologiaService: TecnologiaService) { }

  ngOnInit(): void {
    this.obtenerPerfil();
    this.obtenerTecnologias();
  }

  obtenerPerfil():void{
    let id = localStorage.getItem('idPerfil');
    this.perfilService.getPerfilById(+id!).subscribe(
      data => {
        this.perfil = data;
        console.log(data);
      }
    );
  }

  editarPerfil(perfil:PerfilDTO):void{
    let id = localStorage.getItem('idPerfil');
    this.perfil.img=this.image;
    this.perfilService.updatePerfil(+id, perfil).subscribe(
      data=>{
      alert('editado con exito')
      this.router.navigate(['/admin/perfiles'])
    }
    )
  }

  obtener(e:any){
    this.image=e[0].base64;
    console.log(this.perfil.img)
  }

  obtenerTecnologias():void{
    this.tecnologiaService.getTecnologias().subscribe(
      data => {
        this.tecnologias = data;
        console.log(data)
      }
    );
  }

  compareFn(user1: Tecnologia, user2: Tecnologia) {
    return user1 && user2 ? user1.id === user2.id : user1 === user2;
}


}
