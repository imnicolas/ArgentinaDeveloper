import { MaterialModule } from './../../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilBorrarRoutingModule } from './perfil-borrar-routing.module';
import { PerfilBorrarComponent } from './perfil-borrar.component';


@NgModule({
  declarations: [
    PerfilBorrarComponent
  ],
  imports: [
    CommonModule,
    PerfilBorrarRoutingModule,
    MaterialModule
  ]
})
export class PerfilBorrarModule {
  
}
