import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterStudPage } from './consulter-stud.page';

const routes: Routes = [
  {
    path: '',
    component: ConsulterStudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulterStudPageRoutingModule {}
