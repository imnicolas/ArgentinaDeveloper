import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TencnologiaBorrarComponent } from './tencnologia-borrar.component';

const routes: Routes = [{ path: '', component: TencnologiaBorrarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TencnologiaBorrarRoutingModule { }
