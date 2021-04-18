import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyComptePage } from './verify-compte.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyComptePageRoutingModule {}
