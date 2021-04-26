import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MettingProfPage } from './metting-prof.page';

const routes: Routes = [
  {
    path: '',
    component: MettingProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MettingProfPageRoutingModule {}
