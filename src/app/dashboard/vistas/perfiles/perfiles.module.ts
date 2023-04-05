import { MaterialModule } from './../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesRoutingModule } from './perfiles-routing.module';
import { PerfilesComponent } from './perfiles.component';


@NgModule({
  declarations: [
    PerfilesComponent,
  ],
  imports: [
    CommonModule,
    PerfilesRoutingModule,
    MaterialModule
  ]
})
export class PerfilesModule { }
