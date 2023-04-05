import { MaterialModule } from './../../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilAgregarRoutingModule } from './perfil-agregar-routing.module';
import { PerfilAgregarComponent } from './perfil-agregar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PerfilAgregarComponent
  ],
  imports: [
    CommonModule,
    PerfilAgregarRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PerfilAgregarModule { }
