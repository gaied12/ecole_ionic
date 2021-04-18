import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultNotesPage } from './consult-notes.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultNotesPageRoutingModule {}
