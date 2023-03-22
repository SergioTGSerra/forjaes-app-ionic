import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PontosInteressePage } from './pontos-interesse.page';

const routes: Routes = [
  {
    path: '',
    component: PontosInteressePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PontosInteressePageRoutingModule {}
