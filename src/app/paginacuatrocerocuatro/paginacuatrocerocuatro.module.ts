import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginacuatrocerocuatroPageRoutingModule } from './paginacuatrocerocuatro-routing.module';

import { PaginacuatrocerocuatroPage } from './paginacuatrocerocuatro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginacuatrocerocuatroPageRoutingModule
  ],
  declarations: [PaginacuatrocerocuatroPage]
})
export class PaginacuatrocerocuatroPageModule {}
