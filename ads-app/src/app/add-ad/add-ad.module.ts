import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAdPageRoutingModule } from './add-ad-routing.module';

import { AddAdPage } from './add-ad.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AddAdPageRoutingModule
  ],
  declarations: [AddAdPage]
})
export class AddAdPageModule { }
