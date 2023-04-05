import { TalentosMensualesComponent } from './talentos-mensuales/talentos-mensuales.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '../home-routing/home-routing.module';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HomeRoutingModule, MaterialModule
  ]
})
export class HomeModule { }
