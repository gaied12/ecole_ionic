import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoStudPage } from './info-stud.page';

const routes: Routes = [
  {
    path: '',
    component: InfoStudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoStudPageRoutingModule {}
