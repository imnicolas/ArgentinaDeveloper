import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnologiasComponent } from './tecnologias.component';

const routes: Routes = [{ path: '', component: TecnologiasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnologiasRoutingModule { }
