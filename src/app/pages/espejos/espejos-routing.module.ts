import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspejosPage } from './espejos.page';

const routes: Routes = [
  {
    path: '',
    component: EspejosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspejosPageRoutingModule {}
