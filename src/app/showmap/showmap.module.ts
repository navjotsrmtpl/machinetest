import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowmapPageRoutingModule } from './showmap-routing.module';

import { ShowmapPage } from './showmap.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowmapPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAN8r-LiyEWdNseShhr6ApbORgeA6jr5Zs',
      libraries: ['places']
    })
  ],
  declarations: [ShowmapPage]
})
export class ShowmapPageModule {}
