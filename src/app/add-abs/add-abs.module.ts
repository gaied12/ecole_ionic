import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAbsPageRoutingModule } from './add-abs-routing.module';

import { AddAbsPage } from './add-abs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddAbsPageRoutingModule
  ],
  declarations: [AddAbsPage]
})
export class AddAbsPageModule {}
