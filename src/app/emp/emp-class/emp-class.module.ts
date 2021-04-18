import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpClassPageRoutingModule } from './emp-class-routing.module';

import { EmpClassPage } from './emp-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpClassPageRoutingModule, 
       ReactiveFormsModule

  ],
  declarations: [EmpClassPage]
})
export class EmpClassPageModule {}
