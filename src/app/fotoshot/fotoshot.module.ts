import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotoshotPageRoutingModule } from './fotoshot-routing.module';

import { FotoshotPage } from './fotoshot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotoshotPageRoutingModule
  ],
  declarations: [FotoshotPage]
})
export class FotoshotPageModule {}
