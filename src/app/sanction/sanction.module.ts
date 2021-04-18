import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanctionPageRoutingModule } from './sanction-routing.module';

import { SanctionPage } from './sanction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SanctionPageRoutingModule
  ],
  declarations: [SanctionPage]
})
export class SanctionPageModule {}
