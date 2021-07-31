import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoespejosPage } from './ingresoespejos.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoespejosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoespejosPageRoutingModule {}
