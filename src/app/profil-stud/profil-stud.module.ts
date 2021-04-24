import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilStudPageRoutingModule } from './profil-stud-routing.module';

import { ProfilStudPage } from './profil-stud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilStudPageRoutingModule
  ],
  declarations: [ProfilStudPage]
})
export class ProfilStudPageModule {}
