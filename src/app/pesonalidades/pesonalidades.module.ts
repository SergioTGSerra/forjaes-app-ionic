import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesonalidadesPageRoutingModule } from './pesonalidades-routing.module';

import { PesonalidadesPage } from './pesonalidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesonalidadesPageRoutingModule
  ],
  declarations: [PesonalidadesPage]
})
export class PesonalidadesPageModule {}
