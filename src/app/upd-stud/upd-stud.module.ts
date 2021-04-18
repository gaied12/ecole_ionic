import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdStudPageRoutingModule } from './upd-stud-routing.module';

import { UpdStudPage } from './upd-stud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdStudPageRoutingModule
  ],
  declarations: [UpdStudPage]
})
export class UpdStudPageModule {}
