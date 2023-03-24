import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesonalidadesPage } from './pesonalidades.page';

const routes: Routes = [
  {
    path: '',
    component: PesonalidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesonalidadesPageRoutingModule {}
