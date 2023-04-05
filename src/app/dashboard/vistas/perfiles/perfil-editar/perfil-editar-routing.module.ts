import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilEditarComponent } from './perfil-editar.component';

const routes: Routes = [{ path: '', component: PerfilEditarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilEditarRoutingModule { }
