import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelEmpPageRoutingModule } from './del-emp-routing.module';

import { DelEmpPage } from './del-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelEmpPageRoutingModule
  ],
  declarations: [DelEmpPage]
})
export class DelEmpPageModule {}
