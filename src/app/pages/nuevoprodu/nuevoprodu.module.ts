import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { NuevoproduPage } from './nuevoprodu.page';
import { NuevoproduPageRoutingModule } from '../nuevoprodu/nuevoprodu-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoproduPage,
    NuevoproduPageRoutingModule
  ],
  declarations: [NuevoproduPage]
})
export class NuevoproduPageModule {}
