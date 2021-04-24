import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFilsPage } from './add-fils.page';

const routes: Routes = [
  {
    path: '',
    component: AddFilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFilsPageRoutingModule {}
