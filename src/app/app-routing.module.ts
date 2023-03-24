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
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },  {
    path: 'pontos-interesse',
    loadChildren: () => import('./pontos-interesse/pontos-interesse.module').then( m => m.PontosInteressePageModule)
  },
  {
    path: 'gastronomia',
    loadChildren: () => import('./gastronomia/gastronomia.module').then( m => m.GastronomiaPageModule)
  },
  {
    path: 'alojamento',
    loadChildren: () => import('./alojamento/alojamento.module').then( m => m.AlojamentoPageModule)
  },
  {
    path: 'clube',
    loadChildren: () => import('./clube/clube.module').then( m => m.ClubePageModule)
  },
  {
    path: 'curiosidades',
    loadChildren: () => import('./curiosidades/curiosidades.module').then( m => m.CuriosidadesPageModule)
  },
  {
    path: 'pesonalidades',
    loadChildren: () => import('./pesonalidades/pesonalidades.module').then( m => m.PesonalidadesPageModule)
  },
  {
    path: 'caracterizacao',
    loadChildren: () => import('./caracterizacao/caracterizacao.module').then( m => m.CaracterizacaoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
