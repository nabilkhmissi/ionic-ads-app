import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AdsCardsComponent } from './components/ads-cards/ads-cards.component';
import { AdsService } from './services/ads.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [
    HomePage,
    AdsCardsComponent
  ],
  providers: [
    AdsService
  ]
})
export class HomePageModule { }
