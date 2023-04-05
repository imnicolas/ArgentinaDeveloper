import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosListaComponent } from './proyectos-lista.component';

const routes: Routes = [{ path: '', component: ProyectosListaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosListaRoutingModule { }
