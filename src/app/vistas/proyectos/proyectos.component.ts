import { ProyectoDTO } from './../../modelos/dto/proyectoDTO';
import { Proyecto } from './../../modelos/proyecto';
import { ProyectoService } from './../../servicios/proyecto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: ProyectoDTO[]=[];

  constructor(private proyectoServices:ProyectoService) { }

  ngOnInit(): void {
    this.obtenerProyectos()
  }

  obtenerProyectos(){
    this.proyectoServices.getProyectos().subscribe(
      data => {
        this.proyectos = data;
        console.log(this.proyectos)
      }
    );
  }
}
