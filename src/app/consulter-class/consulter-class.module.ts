import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsulterClassPageRoutingModule } from './consulter-class-routing.module';

import { ConsulterClassPage } from './consulter-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsulterClassPageRoutingModule
  ],
  declarations: [ConsulterClassPage]
})
export class ConsulterClassPageModule {}
