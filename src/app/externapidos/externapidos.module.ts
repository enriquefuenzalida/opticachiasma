import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExternapidosPageRoutingModule } from './externapidos-routing.module';

import { ExternapidosPage } from './externapidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExternapidosPageRoutingModule
  ],
  declarations: [ExternapidosPage]
})
export class ExternapidosPageModule {}
