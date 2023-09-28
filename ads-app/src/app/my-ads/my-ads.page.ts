import { Component, OnInit } from '@angular/core';
import { AdsService } from '../shared/services/ads.service';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../models/user.model';
import { Ad } from '../models/ad.model';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.page.html',
  styleUrls: ['./my-ads.page.scss'],
})
export class MyAdsPage implements OnInit {

  constructor(private _ads: AdsService,
    private _auth: AuthService) {
    this._auth.getUserFromLS()
  }


  user: User | null = null;
  ads: Ad[] = []
  ngOnInit() {
    this._auth.authenticatedUser$.subscribe(
      user => this.user = user
    )
    console.log(this.user)
    if (this.user) {
      this._ads.getAdsByUserId(this.user?._id).subscribe(
        data => {
          this.ads = data
        }
      )
    }
  }
}
