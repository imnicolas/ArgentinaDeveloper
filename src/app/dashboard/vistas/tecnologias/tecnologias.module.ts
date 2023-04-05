import { MaterialModule } from './../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnologiasRoutingModule } from './tecnologias-routing.module';
import { TecnologiasComponent } from './tecnologias.component';


@NgModule({
  declarations: [
    TecnologiasComponent
  ],
  imports: [
    CommonModule,
    TecnologiasRoutingModule,
    MaterialModule
  ]
})
export class TecnologiasModule { }
