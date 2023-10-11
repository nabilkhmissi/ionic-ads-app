import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, switchMap, tap } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-ads-card',
  templateUrl: './ads-card.component.html',
  styleUrls: ['./ads-card.component.scss']
})
export class AdsCardComponent implements OnInit {

  @Input() ad: any;
  @Input() liked = false;
  constructor(
    private _notification: AlertService,
    private _auth: AuthService,
    private _router: Router,
    private _user: UserService) {
    this._auth.getUserFromLS()
  }

  authUser$ = this._auth.authenticatedUser$

  ngOnInit() {
  }

  addFavorite() {
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

  goToDetails(id: string) {
    this._router.navigate(["ads", id])
  }
}
