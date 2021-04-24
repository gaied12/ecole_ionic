import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultFilsPage } from './consult-fils.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultFilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultFilsPageRoutingModule {}
