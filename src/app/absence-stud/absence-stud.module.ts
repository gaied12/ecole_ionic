import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbsenceStudPageRoutingModule } from './absence-stud-routing.module';

import { AbsenceStudPage } from './absence-stud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbsenceStudPageRoutingModule
  ],
  declarations: [AbsenceStudPage]
})
export class AbsenceStudPageModule {}
