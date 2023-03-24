import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlojamentoPageRoutingModule } from './alojamento-routing.module';

import { AlojamentoPage } from './alojamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlojamentoPageRoutingModule
  ],
  declarations: [AlojamentoPage]
})
export class AlojamentoPageModule {}
