import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotoshotPage } from './fotoshot.page';

const routes: Routes = [
  {
    path: '',
    component: FotoshotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotoshotPageRoutingModule {}
