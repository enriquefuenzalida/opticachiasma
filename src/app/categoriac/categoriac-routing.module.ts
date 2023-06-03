import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriacPage } from './categoriac.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriacPageRoutingModule {}
