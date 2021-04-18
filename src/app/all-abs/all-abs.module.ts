import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllAbsPageRoutingModule } from './all-abs-routing.module';

import { AllAbsPage } from './all-abs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllAbsPageRoutingModule
  ],
  declarations: [AllAbsPage]
})
export class AllAbsPageModule {}
