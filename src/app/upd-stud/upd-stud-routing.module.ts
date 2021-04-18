import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdStudPage } from './upd-stud.page';

const routes: Routes = [
  {
    path: '',
    component: UpdStudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdStudPageRoutingModule {}
