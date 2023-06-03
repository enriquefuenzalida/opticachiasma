import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriabPageRoutingModule } from './categoriab-routing.module';

import { CategoriabPage } from './categoriab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriabPageRoutingModule
  ],
  declarations: [CategoriabPage]
})
export class CategoriabPageModule {}
