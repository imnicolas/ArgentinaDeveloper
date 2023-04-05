import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilBorrarComponent } from './perfil-borrar.component';

const routes: Routes = [{ path: '', component: PerfilBorrarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilBorrarRoutingModule { }
