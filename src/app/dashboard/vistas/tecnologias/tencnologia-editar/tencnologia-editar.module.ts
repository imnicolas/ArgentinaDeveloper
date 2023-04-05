import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TencnologiaEditarRoutingModule } from './tencnologia-editar-routing.module';
import { TencnologiaEditarComponent } from './tencnologia-editar.component';


@NgModule({
  declarations: [
    TencnologiaEditarComponent
  ],
  imports: [
    CommonModule,
    TencnologiaEditarRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TencnologiaEditarModule { }
