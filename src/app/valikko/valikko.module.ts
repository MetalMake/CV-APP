import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValikkoPageRoutingModule } from './valikko-routing.module';

import { ValikkoPage } from './valikko.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValikkoPageRoutingModule
  ],
  declarations: [ValikkoPage]
})
export class ValikkoPageModule {}
