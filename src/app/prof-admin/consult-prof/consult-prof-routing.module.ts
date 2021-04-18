import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultProfPage } from './consult-prof.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultProfPageRoutingModule {}
