import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresopuertasPageRoutingModule } from './ingresopuertas-routing.module';

import { IngresopuertasPage } from './ingresopuertas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresopuertasPageRoutingModule
  ],
  declarations: [IngresopuertasPage]
})
export class IngresopuertasPageModule {}
