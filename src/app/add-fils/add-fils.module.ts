import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFilsPageRoutingModule } from './add-fils-routing.module';

import { AddFilsPage } from './add-fils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFilsPageRoutingModule
  ],
  declarations: [AddFilsPage]
})
export class AddFilsPageModule {}
