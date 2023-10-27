import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RidewithgpsPage } from './ridewithgps.page';

const routes: Routes = [
  {
    path: '',
    component: RidewithgpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RidewithgpsPageRoutingModule {}
