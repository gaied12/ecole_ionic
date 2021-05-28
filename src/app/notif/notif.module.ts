import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifPageRoutingModule } from './notif-routing.module';

import { NotifPage } from './notif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NotifPageRoutingModule
  ],
  declarations: [NotifPage]
})
export class NotifPageModule {}
