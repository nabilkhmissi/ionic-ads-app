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
import { AdsCardsComponent } from './components/ads-cards/ads-cards.component';
import { UserService } from './services/user.service';
import { NoContentComponent } from './components/no-content/no-content.component';
import { ToastService } from './services/toast.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderBackComponent } from './components/header-back/header-back.component';
import { TabsComponent } from './components/tabs/tabs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    AdsCardComponent,
    SelectComponent,
    AdsCardsComponent,
    NoContentComponent,
    SpinnerComponent,
    HeaderBackComponent,
    TabsComponent
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
    NoContentComponent,
    SpinnerComponent,
    HeaderBackComponent,
    TabsComponent,
  ],
  providers: [
    LoadingService,
    AlertService,
    AuthService,
    AdsService,
    UserService,
    ToastService,
  ]
})
export class SharedModule { }
