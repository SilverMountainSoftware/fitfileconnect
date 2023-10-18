import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitfilesPageRoutingModule } from './fitfiles-routing.module';

import { FitfilesPage } from './fitfiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FitfilesPageRoutingModule
  ],
  declarations: [FitfilesPage]
})
export class FitfilesPageModule {}
