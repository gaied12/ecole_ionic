import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpProfPageRoutingModule } from './emp-prof-routing.module';

import { EmpProfPage } from './emp-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EmpProfPageRoutingModule
  ],
  declarations: [EmpProfPage]
})
export class EmpProfPageModule {}
