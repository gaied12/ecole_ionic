import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteParentPageRoutingModule } from './note-parent-routing.module';

import { NoteParentPage } from './note-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteParentPageRoutingModule
  ],
  declarations: [NoteParentPage]
})
export class NoteParentPageModule {}
