import { Component, OnInit } from '@angular/core';
import { AdsService } from './services/ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private _ads: AdsService) { 
    
  }

  ads$ = this._ads.getAllAds();
  ngOnInit() {

  }
}
