import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultFilsPageRoutingModule } from './consult-fils-routing.module';

import { ConsultFilsPage } from './consult-fils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultFilsPageRoutingModule
  ],
  declarations: [ConsultFilsPage]
})
export class ConsultFilsPageModule {}
