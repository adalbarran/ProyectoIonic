import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina1',
    loadChildren: () => import('./pagina1/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./pagina1/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'crear-producto',
    loadChildren: () => import('./crearproducto/crearproducto.module').then( m => m.CrearproductoPageModule)
  },
  {
    path: 'crearproducto',
    loadChildren: () => import('./crearproducto/crearproducto.module').then( m => m.CrearproductoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
