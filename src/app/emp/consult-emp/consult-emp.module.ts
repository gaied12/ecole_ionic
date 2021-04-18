import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultEmpPageRoutingModule } from './consult-emp-routing.module';

import { ConsultEmpPage } from './consult-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultEmpPageRoutingModule
  ],
  declarations: [ConsultEmpPage]
})
export class ConsultEmpPageModule {}
