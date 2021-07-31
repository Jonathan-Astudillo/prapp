import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresomesascentroPage } from './ingresomesascentro.page';

const routes: Routes = [
  {
    path: '',
    component: IngresomesascentroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresomesascentroPageRoutingModule {}
