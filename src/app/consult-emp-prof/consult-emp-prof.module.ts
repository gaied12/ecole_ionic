import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultEmpProfPageRoutingModule } from './consult-emp-prof-routing.module';

import { ConsultEmpProfPage } from './consult-emp-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultEmpProfPageRoutingModule
  ],
  declarations: [ConsultEmpProfPage]
})
export class ConsultEmpProfPageModule {}
