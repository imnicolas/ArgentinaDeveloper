import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoEditarRoutingModule } from './proyecto-editar-routing.module';
import { ProyectoEditarComponent } from './proyecto-editar.component';


@NgModule({
  declarations: [
    ProyectoEditarComponent
  ],
  imports: [
    CommonModule,
    ProyectoEditarRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProyectoEditarModule { }
