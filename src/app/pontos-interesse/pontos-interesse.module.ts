import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PontosInteressePageRoutingModule } from './pontos-interesse-routing.module';

import { PontosInteressePage } from './pontos-interesse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PontosInteressePageRoutingModule
  ],
  declarations: [PontosInteressePage]
})
export class PontosInteressePageModule {}
