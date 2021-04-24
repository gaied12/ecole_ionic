import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanctionStudPageRoutingModule } from './sanction-stud-routing.module';

import { SanctionStudPage } from './sanction-stud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanctionStudPageRoutingModule
  ],
  declarations: [SanctionStudPage]
})
export class SanctionStudPageModule {}
