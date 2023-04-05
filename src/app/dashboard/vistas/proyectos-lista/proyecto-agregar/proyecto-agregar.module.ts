import { MaterialModule } from './../../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoAgregarRoutingModule } from './proyecto-agregar-routing.module';
import { ProyectoAgregarComponent } from './proyecto-agregar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProyectoAgregarComponent
  ],
  imports: [
    CommonModule,
    ProyectoAgregarRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ProyectoAgregarModule { }
