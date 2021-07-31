import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  NuevoproduPage } from './nuevoprodu.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoproduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoproduPageRoutingModule {}
