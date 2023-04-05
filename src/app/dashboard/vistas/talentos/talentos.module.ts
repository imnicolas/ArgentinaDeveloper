import { MaterialModule } from './../../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentosRoutingModule } from './talentos-routing.module';
import { TalentosComponent } from './talentos.component';


@NgModule({
  declarations: [
    TalentosComponent
  ],
  imports: [
    CommonModule,
    TalentosRoutingModule,
    MaterialModule
  ]
})
export class TalentosModule { }
