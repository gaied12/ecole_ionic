import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultProfPageRoutingModule } from './consult-prof-routing.module';

import { ConsultProfPage } from './consult-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultProfPageRoutingModule
  ],
  declarations: [ConsultProfPage]
})
export class ConsultProfPageModule {}
