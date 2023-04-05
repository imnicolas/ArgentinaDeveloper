import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilAgregarComponent } from './perfil-agregar.component';

const routes: Routes = [{ path: '', component: PerfilAgregarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilAgregarRoutingModule { }
