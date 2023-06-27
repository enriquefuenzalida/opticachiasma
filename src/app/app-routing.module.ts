import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardiaService } from './services/guardia.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'categoriaa',
    loadChildren: () => import('./categoriaa/categoriaa.module').then( m => m.CategoriaaPageModule)
  },
  {
    path: 'categoriab',
    loadChildren: () => import('./categoriab/categoriab.module').then( m => m.CategoriabPageModule)
  },
  {
    path: 'categoriac',
    loadChildren: () => import('./categoriac/categoriac.module').then( m => m.CategoriacPageModule)
  },
  {
    path: 'categoriad',
    loadChildren: () => import('./categoriad/categoriad.module').then( m => m.CategoriadPageModule)
  },
  {
    path: 'categoriae',
    loadChildren: () => import('./categoriae/categoriae.module').then( m => m.CategoriaePageModule)
  },
  {
    path: 'categoriaf',
    loadChildren: () => import('./categoriaf/categoriaf.module').then( m => m.CategoriafPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'generar',
    loadChildren: () => import('./generar/generar.module').then( m => m.GenerarPageModule)
  },
  {
    path: 'externapi',
    loadChildren: () => import('./externapi/externapi.module').then( m => m.ExternapiPageModule)
  },
  {
    path: 'sqliteintento',
    loadChildren: () => import('./sqliteintento/sqliteintento.module').then( m => m.SqliteintentoPageModule)
  },
  {
    path: 'fotoshot',
    loadChildren: () => import('./fotoshot/fotoshot.module').then( m => m.FotoshotPageModule)
  },
  {
    path: 'externapidos',
    loadChildren: () => import('./externapidos/externapidos.module').then( m => m.ExternapidosPageModule),
    canActivate: [GuardiaService]
  },
  {
    path: '**',
    loadChildren: () => import('./paginacuatrocerocuatro/paginacuatrocerocuatro.module').then( m => m.PaginacuatrocerocuatroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
