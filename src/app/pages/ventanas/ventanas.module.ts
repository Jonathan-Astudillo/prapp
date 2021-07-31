import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentanasPageRoutingModule } from './ventanas-routing.module';

import { VentanasPage } from './ventanas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentanasPageRoutingModule
  ],
  declarations: [VentanasPage]
})
export class VentanasPageModule {}
