import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresosillasPageRoutingModule } from './ingresosillas-routing.module';

import { IngresosillasPage } from './ingresosillas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresosillasPageRoutingModule
  ],
  declarations: [IngresosillasPage]
})
export class IngresosillasPageModule {}
