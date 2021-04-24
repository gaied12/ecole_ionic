import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpProfPage } from './emp-prof.page';

const routes: Routes = [
  {
    path: '',
    component: EmpProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpProfPageRoutingModule {}
