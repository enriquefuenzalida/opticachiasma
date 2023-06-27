import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExternapiPage } from './externapi.page';

const routes: Routes = [
  {
    path: '',
    component: ExternapiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternapiPageRoutingModule {}
