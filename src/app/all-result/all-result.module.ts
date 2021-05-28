import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllResultPageRoutingModule } from './all-result-routing.module';

import { AllResultPage } from './all-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllResultPageRoutingModule
  ],
  declarations: [AllResultPage]
})
export class AllResultPageModule {}
