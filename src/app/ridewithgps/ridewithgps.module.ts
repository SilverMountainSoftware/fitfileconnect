import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RidewithgpsPageRoutingModule } from './ridewithgps-routing.module';

import { RidewithgpsPage } from './ridewithgps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RidewithgpsPageRoutingModule
  ],
  declarations: [RidewithgpsPage]
})
export class RidewithgpsPageModule {}
