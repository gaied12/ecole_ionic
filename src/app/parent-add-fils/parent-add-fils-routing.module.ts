import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentAddFilsPage } from './parent-add-fils.page';

const routes: Routes = [
  {
    path: '',
    component: ParentAddFilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentAddFilsPageRoutingModule {}
