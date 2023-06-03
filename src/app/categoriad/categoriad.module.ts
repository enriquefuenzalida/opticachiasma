import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriadPageRoutingModule } from './categoriad-routing.module';

import { CategoriadPage } from './categoriad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriadPageRoutingModule
  ],
  declarations: [CategoriadPage]
})
export class CategoriadPageModule {}
