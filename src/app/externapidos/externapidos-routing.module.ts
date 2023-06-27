import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExternapidosPage } from './externapidos.page';

const routes: Routes = [
  {
    path: '',
    component: ExternapidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternapidosPageRoutingModule {}
