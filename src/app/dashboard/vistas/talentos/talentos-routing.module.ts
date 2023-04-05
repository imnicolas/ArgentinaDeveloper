import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentosComponent } from './talentos.component';

const routes: Routes = [{ path: '', component: TalentosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentosRoutingModule { }
