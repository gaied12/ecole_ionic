import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllResultPage } from './all-result.page';

const routes: Routes = [
  {
    path: '',
    component: AllResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllResultPageRoutingModule {}
