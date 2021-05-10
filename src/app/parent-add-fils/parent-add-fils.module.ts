import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentAddFilsPageRoutingModule } from './parent-add-fils-routing.module';

import { ParentAddFilsPage } from './parent-add-fils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ParentAddFilsPageRoutingModule
  ],
  declarations: [ParentAddFilsPage]
})
export class ParentAddFilsPageModule {}
