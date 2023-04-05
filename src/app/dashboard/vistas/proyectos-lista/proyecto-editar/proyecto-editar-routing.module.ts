import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoEditarComponent } from './proyecto-editar.component';

const routes: Routes = [{ path: '', component: ProyectoEditarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoEditarRoutingModule { }
