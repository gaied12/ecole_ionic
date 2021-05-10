import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';


import { FilsSelectionPage } from './fils-selection.page';

const routes: Routes = [
  {
    path: '',
    component: FilsSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]

})
export class FilsSelectionPageRoutingModule {}
