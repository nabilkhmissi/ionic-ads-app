import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoadingService } from '../shared/services/loading.service';
import { Ad } from '../models/ad.model';
import { AdsService } from '../shared/services/ads.service';
import { AuthService } from '../shared/services/auth.service';
import { EMPTY, switchMap } from 'rxjs';
import { AlertService } from '../shared/services/alert.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.page.html',
  styleUrls: ['./ad-details.page.scss'],
})
export class AdDetailsPage implements OnInit {

  constructor(
    private _details: AdsService,
    private _ad: AdsService,
    private _activatedRoute: ActivatedRoute,
    private _loading: LoadingService,
    private _auth: AuthService,
    private _notification: AlertService,
    private _user: UserService
  ) {
    _auth.getUserFromLS()
  }


  ad!: Ad;
  liked = false;
  ngOnInit() {
    this._loading.showLoading();
    const id = this._activatedRoute.snapshot.paramMap.get("id")
    if (id) {
      this._details.getAdById(id).subscribe(data => {
        this._loading.hideLoading();
        this.ad = data
      })
    }
  }

  doLike() {
    this._auth.authenticatedUser$.pipe(
      switchMap(user => {
        this.liked = !this.liked
        if (!user) {
          this._notification.showNotification("You have to login first");
          return EMPTY;
        } else {
          return this._user.addToLikes(this.ad)
        }
      })
    ).subscribe()
  }


}
