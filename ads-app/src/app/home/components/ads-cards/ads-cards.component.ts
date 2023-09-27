import { Component, OnInit } from '@angular/core';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-ads-cards',
  templateUrl: './ads-cards.component.html',
  styleUrls: ['./ads-cards.component.scss'],
})
export class AdsCardsComponent implements OnInit {

  constructor(private _ads: AdsService) { }

  ads$ = this._ads.getAllAds();

  ngOnInit() { }

}
