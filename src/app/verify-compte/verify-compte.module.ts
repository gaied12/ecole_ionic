import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyComptePageRoutingModule } from './verify-compte-routing.module';

import { VerifyComptePage } from './verify-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyComptePageRoutingModule
  ],
  declarations: [VerifyComptePage]
})
export class VerifyComptePageModule {}
