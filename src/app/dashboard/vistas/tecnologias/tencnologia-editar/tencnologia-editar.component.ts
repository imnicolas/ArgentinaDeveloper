import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Tecnologia } from 'src/app/modelos/tecnologia';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';
import { TencnologiaCrearComponent } from '../tencnologia-crear/tencnologia-crear.component';

@Component({
  selector: 'app-tencnologia-editar',
  templateUrl: './tencnologia-editar.component.html',
  styleUrls: ['./tencnologia-editar.component.css']
})
export class TencnologiaEditarComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  tecnologia: Tecnologia = new Tecnologia();

  constructor(private tecnologiaService: TecnologiaService,
    public dialogRef: MatDialogRef<TencnologiaCrearComponent>,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerTecno()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  obtenerTecno(): void {
    let id = localStorage.getItem('idTecnoEditar');
    this.tecnologiaService.getTecnologiaById(+id!).subscribe(
      data => {
        this.tecnologia = data;
        console.log(data);
      }
    );
  }

  editarTecno(): void {
    this.tecnologiaService.updateTecnologia(this.tecnologia.id, this.tecnologia).subscribe(
      data => {
        this._snackBar.open('Tecnologia Editada', 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        }
        )
        this.dialogRef.close()
      });

  }
}

