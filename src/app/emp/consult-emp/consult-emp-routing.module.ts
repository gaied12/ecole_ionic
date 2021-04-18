import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultEmpPage } from './consult-emp.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultEmpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultEmpPageRoutingModule {}
