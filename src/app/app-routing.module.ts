import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'produtos-listagem',
    pathMatch: 'full'
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'produtos-listagem',
    loadChildren: () => import('./produtos/produtos-listagem/produtos-listagem.module').then( m => m.ProdutosListagemPageModule)
  },
  {
    path: 'produtos-detalhes/:detalhes',
    loadChildren: () => import('./produtos/produtos-detalhes/produtos-detalhes.module').then( m => m.ProdutosDetalhesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
