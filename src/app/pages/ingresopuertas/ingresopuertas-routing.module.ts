import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresopuertasPage } from './ingresopuertas.page';

const routes: Routes = [
  {
    path: '',
    component: IngresopuertasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresopuertasPageRoutingModule {}
