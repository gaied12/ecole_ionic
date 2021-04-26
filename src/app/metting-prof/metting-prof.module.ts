import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MettingProfPageRoutingModule } from './metting-prof-routing.module';

import { MettingProfPage } from './metting-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MettingProfPageRoutingModule
  ],
  declarations: [MettingProfPage]
})
export class MettingProfPageModule {}
