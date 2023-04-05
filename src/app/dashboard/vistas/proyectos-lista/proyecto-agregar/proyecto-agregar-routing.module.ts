import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoAgregarComponent } from './proyecto-agregar.component';

const routes: Routes = [{ path: '', component: ProyectoAgregarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoAgregarRoutingModule { }
