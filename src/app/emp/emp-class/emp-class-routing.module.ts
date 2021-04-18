import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpClassPage } from './emp-class.page';

const routes: Routes = [
  {
    path: '',
    component: EmpClassPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    
],
  exports: [RouterModule],
})
export class EmpClassPageRoutingModule {}
