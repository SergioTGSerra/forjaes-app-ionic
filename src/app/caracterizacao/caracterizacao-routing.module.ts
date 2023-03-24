import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaracterizacaoPage } from './caracterizacao.page';

const routes: Routes = [
  {
    path: '',
    component: CaracterizacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaracterizacaoPageRoutingModule {}
