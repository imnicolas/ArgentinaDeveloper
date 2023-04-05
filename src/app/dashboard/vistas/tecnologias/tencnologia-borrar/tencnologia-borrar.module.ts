import { MaterialModule } from './../../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TencnologiaBorrarRoutingModule } from './tencnologia-borrar-routing.module';
import { TencnologiaBorrarComponent } from './tencnologia-borrar.component';


@NgModule({
  declarations: [
    TencnologiaBorrarComponent
  ],
  imports: [
    CommonModule,
    TencnologiaBorrarRoutingModule,
    MaterialModule
  ]
})
export class TencnologiaBorrarModule { }
