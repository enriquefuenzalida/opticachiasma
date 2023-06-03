import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaaPageRoutingModule } from './categoriaa-routing.module';

import { CategoriaaPage } from './categoriaa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaaPageRoutingModule
  ],
  declarations: [CategoriaaPage]
})
export class CategoriaaPageModule {}
