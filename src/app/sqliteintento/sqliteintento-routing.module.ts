import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SqliteintentoPage } from './sqliteintento.page';

const routes: Routes = [
  {
    path: '',
    component: SqliteintentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SqliteintentoPageRoutingModule {}
