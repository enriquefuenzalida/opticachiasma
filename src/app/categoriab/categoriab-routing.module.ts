import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriabPage } from './categoriab.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriabPageRoutingModule {}
