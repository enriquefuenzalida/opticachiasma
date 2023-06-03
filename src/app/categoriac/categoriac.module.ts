import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriacPageRoutingModule } from './categoriac-routing.module';

import { CategoriacPage } from './categoriac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriacPageRoutingModule
  ],
  declarations: [CategoriacPage]
})
export class CategoriacPageModule {}
