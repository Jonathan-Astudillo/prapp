import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresosillasPage } from './ingresosillas.page';

const routes: Routes = [
  {
    path: '',
    component: IngresosillasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresosillasPageRoutingModule {}
