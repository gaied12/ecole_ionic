import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteParentPage } from './note-parent.page';

const routes: Routes = [
  {
    path: '',
    component: NoteParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteParentPageRoutingModule {}
