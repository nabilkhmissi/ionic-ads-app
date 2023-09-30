import { Component, Input, OnInit } from '@angular/core';
import { AdsService } from '../../services/ads.service';
import { Ad } from 'src/app/models/ad.model';

@Component({
  selector: 'app-ads-cards',
  templateUrl: './ads-cards.component.html',
  styleUrls: ['./ads-cards.component.scss'],
})
export class AdsCardsComponent implements OnInit {

  @Input() ads: Ad[] = [];
  @Input() liked = false;
  ngOnInit() { }

}
