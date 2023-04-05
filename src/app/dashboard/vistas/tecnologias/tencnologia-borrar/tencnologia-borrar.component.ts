import { TecnologiaService } from './../../../../servicios/tecnologia.service';
import { Tecnologia } from './../../../../modelos/tecnologia';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { ProyectoBorrarComponent } from '../../proyectos-lista/proyecto-borrar/proyecto-borrar.component';

@Component({
  selector: 'app-tencnologia-borrar',
  templateUrl: './tencnologia-borrar.component.html',
  styleUrls: ['./tencnologia-borrar.component.css']
})
export class TencnologiaBorrarComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  subscription: Subscription;

  tecnologia: Tecnologia = new Tecnologia();

  constructor( private tecnologiaService:TecnologiaService,
    public dialogRef: MatDialogRef<TencnologiaBorrarComponent>,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerTecnologia();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  obtenerTecnologia():void{
    let id = localStorage.getItem('idTecnoBorrar');
    this.tecnologiaService.getTecnologiaById(+id!).subscribe(
      data => {
        this.tecnologia = data;
        console.log(data);
      }
    );
  }

  borrar():void{
    this.tecnologiaService.deleteTecnologia(this.tecnologia.id).subscribe(
      data => {
        this._snackBar.open('Tecnologia Eliminada', 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        }
        )
        this.dialogRef.close()
      }
    );
  }


}
