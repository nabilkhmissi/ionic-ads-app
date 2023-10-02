import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdDetailsPageRoutingModule } from './ad-details-routing.module';

import { AdDetailsPage } from './ad-details.page';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AdDetailsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AdDetailsPage]
})
export class AdDetailsPageModule { }
