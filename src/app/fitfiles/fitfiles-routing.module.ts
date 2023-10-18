import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitfilesPage } from './fitfiles.page';

const routes: Routes = [
  {
    path: '',
    component: FitfilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitfilesPageRoutingModule {}
