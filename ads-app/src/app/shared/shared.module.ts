import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdsCardComponent } from './components/ads-card/ads-card.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingService } from './services/loading.service';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    AdsCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    AdsCardComponent
  ],
  providers: [
    LoadingService,
    AlertService,
    AuthService,
  ]
})
export class SharedModule { }
