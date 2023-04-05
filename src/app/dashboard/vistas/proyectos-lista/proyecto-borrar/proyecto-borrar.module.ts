import { MaterialModule } from './../../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoBorrarRoutingModule } from './proyecto-borrar-routing.module';
import { ProyectoBorrarComponent } from './proyecto-borrar.component';


@NgModule({
  declarations: [
    ProyectoBorrarComponent
  ],
  imports: [
    CommonModule,
    ProyectoBorrarRoutingModule,
    MaterialModule
  ]
})
export class ProyectoBorrarModule { }
