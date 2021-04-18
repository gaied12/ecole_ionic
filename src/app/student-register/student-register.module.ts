import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentRegisterPageRoutingModule } from './student-register-routing.module';

import { StudentRegisterPage } from './student-register.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    StudentRegisterPageRoutingModule
  ],
  declarations: [StudentRegisterPage]
})
export class StudentRegisterPageModule {}
