import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanctionPage } from './sanction.page';

const routes: Routes = [
  {
    path: '',
    component: SanctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanctionPageRoutingModule {}
