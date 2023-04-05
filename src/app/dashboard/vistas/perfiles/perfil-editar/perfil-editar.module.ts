import { MaterialModule } from 'src/app/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilEditarRoutingModule } from './perfil-editar-routing.module';
import { PerfilEditarComponent } from './perfil-editar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PerfilEditarComponent
  ],
  imports: [
    CommonModule,
    PerfilEditarRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PerfilEditarModule { }
