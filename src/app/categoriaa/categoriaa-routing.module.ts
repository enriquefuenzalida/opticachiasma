import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaaPage } from './categoriaa.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaaPageRoutingModule {}
