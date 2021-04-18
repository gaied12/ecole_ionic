import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProfPageRoutingModule } from './add-prof-routing.module';

import { AddProfPage } from './add-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProfPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [AddProfPage]
})
export class AddProfPageModule {}
