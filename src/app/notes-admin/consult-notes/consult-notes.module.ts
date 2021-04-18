import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultNotesPageRoutingModule } from './consult-notes-routing.module';

import { ConsultNotesPage } from './consult-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultNotesPageRoutingModule
  ],
  declarations: [ConsultNotesPage]
})
export class ConsultNotesPageModule {}
