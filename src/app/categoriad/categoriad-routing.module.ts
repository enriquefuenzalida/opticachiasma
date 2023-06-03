import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriadPage } from './categoriad.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriadPageRoutingModule {}
