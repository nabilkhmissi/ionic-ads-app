import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, switchMap } from 'rxjs';
import { Ad } from 'src/app/models/ad.model';
import { AdsService } from 'src/app/shared/services/ads.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.page.html',
  styleUrls: ['./ad-details.page.scss'],
})
export class AdDetailsPage implements OnInit {

  constructor(
    private _details: AdsService,
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
  loading$ = this._loading.loading$;

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
