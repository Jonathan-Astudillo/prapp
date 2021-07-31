import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspejosPageRoutingModule } from './espejos-routing.module';

import { EspejosPage } from './espejos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspejosPageRoutingModule
  ],
  declarations: [EspejosPage]
})
export class EspejosPageModule {}
