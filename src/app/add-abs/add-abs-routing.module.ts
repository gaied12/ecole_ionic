import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAbsPage } from './add-abs.page';

const routes: Routes = [
  {
    path: '',
    component: AddAbsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAbsPageRoutingModule {}
