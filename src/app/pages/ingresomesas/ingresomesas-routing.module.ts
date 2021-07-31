import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresomesasPage } from './ingresomesas.page';

const routes: Routes = [
  {
    path: '',
    component: IngresomesasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresomesasPageRoutingModule {}
