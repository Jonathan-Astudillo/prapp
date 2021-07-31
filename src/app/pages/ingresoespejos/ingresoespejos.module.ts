import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoespejosPageRoutingModule } from './ingresoespejos-routing.module';

import { IngresoespejosPage } from './ingresoespejos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoespejosPageRoutingModule
  ],
  declarations: [IngresoespejosPage]
})
export class IngresoespejosPageModule {}
