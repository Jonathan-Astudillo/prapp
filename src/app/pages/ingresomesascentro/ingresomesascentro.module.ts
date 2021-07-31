import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresomesascentroPageRoutingModule } from './ingresomesascentro-routing.module';

import { IngresomesascentroPage } from './ingresomesascentro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresomesascentroPageRoutingModule
  ],
  declarations: [IngresomesascentroPage]
})
export class IngresomesascentroPageModule {}
