import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbsenceStudPage } from './absence-stud.page';

const routes: Routes = [
  {
    path: '',
    component: AbsenceStudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbsenceStudPageRoutingModule {}
