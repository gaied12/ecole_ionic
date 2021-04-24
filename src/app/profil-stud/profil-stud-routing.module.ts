import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilStudPage } from './profil-stud.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilStudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilStudPageRoutingModule {}
