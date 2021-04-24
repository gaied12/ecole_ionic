import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanctionStudPage } from './sanction-stud.page';

const routes: Routes = [
  {
    path: '',
    component: SanctionStudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanctionStudPageRoutingModule {}
