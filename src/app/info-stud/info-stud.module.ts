import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoStudPageRoutingModule } from './info-stud-routing.module';

import { InfoStudPage } from './info-stud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoStudPageRoutingModule
  ],
  declarations: [InfoStudPage]
})
export class InfoStudPageModule {}
