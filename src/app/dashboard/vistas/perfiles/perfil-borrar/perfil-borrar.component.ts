import { PerfilDTO } from './../../../../modelos/dto/perfilDTO';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Perfil } from 'src/app/modelos/perfil';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-perfil-borrar',
  templateUrl: './perfil-borrar.component.html',
  styleUrls: ['./perfil-borrar.component.css']
})
export class PerfilBorrarComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  subscription: Subscription;

  perfil: PerfilDTO = new Perfil();

  constructor(private perfilService:PerfilService, private router:Router,
    public dialogRef: MatDialogRef<PerfilBorrarComponent>,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerPerfil();
    this.subscription =  this.perfilService.refresh$.subscribe(()=>{
      this.borrar();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  obtenerPerfil():void{
    let id = localStorage.getItem('idPerfilBorrar');
    this.perfilService.getPerfilById(+id!).subscribe(
      data => {
        this.perfil = data;
        console.log(data);
      }
    );
  }

  borrar():void{
  this.perfilService.deletePerfil(this.perfil.id).subscribe(
    data => {
      this._snackBar.open('Perfil Eliminado', 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      }
      )
      this.dialogRef.close()
    }
  );
 // window.location.reload();
  }

}
