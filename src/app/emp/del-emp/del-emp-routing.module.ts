import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelEmpPage } from './del-emp.page';

const routes: Routes = [
  {
    path: '',
    component: DelEmpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelEmpPageRoutingModule {}
