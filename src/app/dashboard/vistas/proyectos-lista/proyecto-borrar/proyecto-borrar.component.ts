import { ProyectoDTO } from './../../../../modelos/dto/proyectoDTO';
import { ProyectoService } from './../../../../servicios/proyecto.service';
import { Proyecto } from './../../../../modelos/proyecto';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto-borrar',
  templateUrl: './proyecto-borrar.component.html',
  styleUrls: ['./proyecto-borrar.component.css']
})
export class ProyectoBorrarComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  subscription: Subscription;

  proyecto: ProyectoDTO = new ProyectoDTO();

  constructor(private proyectoService:ProyectoService,
    public dialogRef: MatDialogRef<ProyectoBorrarComponent>,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerProyecto();
    this.subscription =  this.proyectoService.refresh$.subscribe(()=>{
      this.borrar();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  obtenerProyecto():void{
    let id = localStorage.getItem('idProyectoBorrar');
    this.proyectoService.getProyectoById(+id!).subscribe(
      data => {
        this.proyecto = data;
        console.log(data);
      }
    );
  }

  borrar():void{
    this.proyectoService.deleteProyectos(this.proyecto.id).subscribe(
      data => {
        this._snackBar.open('Proyecto Eliminado', 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        }
        )
        this.dialogRef.close()
      }
    );
  }

}
