import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqliteintentoPageRoutingModule } from './sqliteintento-routing.module';

import { SqliteintentoPage } from './sqliteintento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqliteintentoPageRoutingModule
  ],
  declarations: [SqliteintentoPage]
})
export class SqliteintentoPageModule {}
