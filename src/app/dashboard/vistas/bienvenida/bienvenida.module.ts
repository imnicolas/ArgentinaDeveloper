import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienvenidaRoutingModule } from './bienvenida-routing.module';
import { BienvenidaComponent } from './bienvenida.component';


@NgModule({
  declarations: [
    BienvenidaComponent
  ],
  imports: [
    CommonModule,
    BienvenidaRoutingModule
  ]
})
export class BienvenidaModule { }
