import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TencnologiaEditarComponent } from './tencnologia-editar.component';

const routes: Routes = [{ path: '', component: TencnologiaEditarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TencnologiaEditarRoutingModule { }
