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
import { AdsService } from './services/ads.service';
import { SelectComponent } from './components/select/select.component';
import { CategoryService } from './services/category.service';
import { AdsCardsComponent } from './components/ads-cards/ads-cards.component';
import { UserService } from './services/user.service';
import { NoContentComponent } from './components/no-content/no-content.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    AdsCardComponent,
    SelectComponent,
    AdsCardsComponent,
    NoContentComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    AdsCardComponent,
    SelectComponent,
    AdsCardsComponent,
    NoContentComponent
  ],
  providers: [
    LoadingService,
    AlertService,
    AuthService,
    AdsService,
    CategoryService,
    UserService
  ]
})
export class SharedModule { }
