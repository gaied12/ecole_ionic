import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProfPage } from './add-prof.page';

const routes: Routes = [
  {
    path: '',
    component: AddProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProfPageRoutingModule {}
