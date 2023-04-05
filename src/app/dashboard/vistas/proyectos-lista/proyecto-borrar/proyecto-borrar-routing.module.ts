import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoBorrarComponent } from './proyecto-borrar.component';

const routes: Routes = [{ path: '', component: ProyectoBorrarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoBorrarRoutingModule { }
