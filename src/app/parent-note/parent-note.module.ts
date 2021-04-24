import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentNotePageRoutingModule } from './parent-note-routing.module';

import { ParentNotePage } from './parent-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentNotePageRoutingModule
  ],
  declarations: [ParentNotePage]
})
export class ParentNotePageModule {}
