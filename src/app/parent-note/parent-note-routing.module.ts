import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentNotePage } from './parent-note.page';

const routes: Routes = [
  {
    path: '',
    component: ParentNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentNotePageRoutingModule {}
