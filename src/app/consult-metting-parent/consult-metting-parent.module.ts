import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultMettingParentPageRoutingModule } from './consult-metting-parent-routing.module';

import { ConsultMettingParentPage } from './consult-metting-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultMettingParentPageRoutingModule
  ],
  declarations: [ConsultMettingParentPage]
})
export class ConsultMettingParentPageModule {}
