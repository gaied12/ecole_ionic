import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllAbsPage } from './all-abs.page';

const routes: Routes = [
  {
    path: '',
    component: AllAbsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllAbsPageRoutingModule {}
