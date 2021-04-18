import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsulterStudPageRoutingModule } from './consulter-stud-routing.module';

import { ConsulterStudPage } from './consulter-stud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsulterStudPageRoutingModule
  ],
  declarations: [ConsulterStudPage]
})
export class ConsulterStudPageModule {}
