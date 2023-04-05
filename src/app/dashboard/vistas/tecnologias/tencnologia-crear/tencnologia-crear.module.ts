import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TencnologiaCrearRoutingModule } from './tencnologia-crear-routing.module';
import { TencnologiaCrearComponent } from './tencnologia-crear.component';


@NgModule({
  declarations: [
    TencnologiaCrearComponent
  ],
  imports: [
    CommonModule,
    TencnologiaCrearRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class TencnologiaCrearModule { }
