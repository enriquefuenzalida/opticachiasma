import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaePageRoutingModule } from './categoriae-routing.module';

import { CategoriaePage } from './categoriae.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaePageRoutingModule
  ],
  declarations: [CategoriaePage]
})
export class CategoriaePageModule {}
