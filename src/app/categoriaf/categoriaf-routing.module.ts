import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriafPage } from './categoriaf.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriafPageRoutingModule {}
