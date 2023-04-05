import { MaterialModule } from './../../material/material.module';
import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule, NavigationRoutingModule, MaterialModule
  ]
})
export class NavigationModule { }
