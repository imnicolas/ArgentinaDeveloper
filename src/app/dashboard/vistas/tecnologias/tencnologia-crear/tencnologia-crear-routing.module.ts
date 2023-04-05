import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TencnologiaCrearComponent } from './tencnologia-crear.component';

const routes: Routes = [{ path: '', component: TencnologiaCrearComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TencnologiaCrearRoutingModule { }
