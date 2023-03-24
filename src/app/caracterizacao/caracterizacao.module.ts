import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaracterizacaoPageRoutingModule } from './caracterizacao-routing.module';

import { CaracterizacaoPage } from './caracterizacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaracterizacaoPageRoutingModule
  ],
  declarations: [CaracterizacaoPage]
})
export class CaracterizacaoPageModule {}
