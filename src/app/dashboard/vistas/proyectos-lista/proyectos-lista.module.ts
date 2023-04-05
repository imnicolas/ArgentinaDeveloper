import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosListaRoutingModule } from './proyectos-lista-routing.module';
import { ProyectosListaComponent } from './proyectos-lista.component';


@NgModule({
  declarations: [
    ProyectosListaComponent
  ],
  imports: [
    CommonModule,
    ProyectosListaRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProyectosListaModule { }
