import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilsSelectionPageRoutingModule } from './fils-selection-routing.module';

import { FilsSelectionPage } from './fils-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilsSelectionPageRoutingModule
  ],
  declarations: [FilsSelectionPage]
})
export class FilsSelectionPageModule {}
