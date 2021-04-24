import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MettingParentPage } from './metting-parent.page';

const routes: Routes = [
  {
    path: '',
    component: MettingParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MettingParentPageRoutingModule {}
