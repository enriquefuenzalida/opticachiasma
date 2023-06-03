import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriafPageRoutingModule } from './categoriaf-routing.module';

import { CategoriafPage } from './categoriaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriafPageRoutingModule
  ],
  declarations: [CategoriafPage]
})
export class CategoriafPageModule {}
