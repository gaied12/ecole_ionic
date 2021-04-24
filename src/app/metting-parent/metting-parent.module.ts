import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MettingParentPageRoutingModule } from './metting-parent-routing.module';

import { MettingParentPage } from './metting-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MettingParentPageRoutingModule
  ],
  declarations: [MettingParentPage]
})
export class MettingParentPageModule {}
