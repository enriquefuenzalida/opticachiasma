import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExternapiPageRoutingModule } from './externapi-routing.module';

import { ExternapiPage } from './externapi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExternapiPageRoutingModule
  ],
  declarations: [ExternapiPage]
})
export class ExternapiPageModule {}
