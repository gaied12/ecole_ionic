import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultEmpProfPage } from './consult-emp-prof.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultEmpProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultEmpProfPageRoutingModule {}
