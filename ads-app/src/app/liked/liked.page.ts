import { Component, OnInit } from '@angular/core';
import { AdsService } from '../shared/services/ads.service';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../models/user.model';
import { Ad } from '../models/ad.model';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.page.html',
  styleUrls: ['./liked.page.scss'],
})
export class LikedPage implements OnInit {

  constructor(private _ads: AdsService,
    private _auth: AuthService) {
    this._auth.getUserFromLS()
  }



  ngOnInit() {
  }

}
