import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-ads-card',
  templateUrl: './ads-card.component.html',
  styleUrls: ['./ads-card.component.scss']
})
export class AdsCardComponent implements OnInit {

  @Input() ad: any
  constructor(
    private _notification: AlertService,
    private _auth: AuthService,
    private _router: Router) { }

  authUser$ = this._auth.authenticatedUser$

  ngOnInit() {
  }

  doLike() {
    this._auth.authenticatedUser$.pipe(
      tap(user => {
        if (!user) {
          this._notification.showNotification("You have to login first")
        } else {
          console.log("like post work")
        }
      })
    ).subscribe()
  }

  goToDetails(id: string) {
    this._router.navigate(["ads", id])
  }
}
