import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresomesasPageRoutingModule } from './ingresomesas-routing.module';

import { IngresomesasPage } from './ingresomesas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresomesasPageRoutingModule
  ],
  declarations: [IngresomesasPage]
})
export class IngresomesasPageModule {}
