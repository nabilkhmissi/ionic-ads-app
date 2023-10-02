import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/app/models/ad.model';
import { User } from 'src/app/models/user.model';
import { AdsService } from 'src/app/shared/services/ads.service';
import { AuthService } from 'src/app/shared/services/auth.service';


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
    if (this.user) {
      this._ads.getAdsByUserId(this.user?._id).subscribe(
        data => {
          this.ads = data
        }
      )
    }
  }
}
