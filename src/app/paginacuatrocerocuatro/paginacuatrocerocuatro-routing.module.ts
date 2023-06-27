import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginacuatrocerocuatroPage } from './paginacuatrocerocuatro.page';

const routes: Routes = [
  {
    path: '',
    component: PaginacuatrocerocuatroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginacuatrocerocuatroPageRoutingModule {}
