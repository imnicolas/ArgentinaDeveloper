import { Tecnologia } from './../../../../modelos/tecnologia';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tencnologia-crear',
  templateUrl: './tencnologia-crear.component.html',
  styleUrls: ['./tencnologia-crear.component.css']
})
export class TencnologiaCrearComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  subscription: Subscription;
  agregarForm!: FormGroup;
  tecnologia: Tecnologia = new Tecnologia

  constructor(private tecnologiaService:TecnologiaService,
    public dialogRef: MatDialogRef<TencnologiaCrearComponent>,
    private _snackBar: MatSnackBar,
    private formBuilder:FormBuilder,) { }

  ngOnInit(): void {
    this.agregarForm = this.formBuilder.group({
      name:[''],
    active:[true] });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  agregarTecno():void{
  this.tecnologiaService.createTecnologia(this.agregarForm.value).subscribe(
    data => {
      this._snackBar.open('Tecnologia Creada', 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      }
      )
      this.dialogRef.close()});
  }
}
