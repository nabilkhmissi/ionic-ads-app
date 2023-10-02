import { Component, OnInit } from '@angular/core';

import { switchMap, tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private _user: UserService,
    private _auth: AuthService) {
    _auth.getUserFromLS()
  }

  user: User | null = null

  ngOnInit() {
    this._auth.authenticatedUser$.subscribe(
      user => {
        this.user = user
      }
    )
  }

  updateDetails() {
    this._auth.authenticatedUser$.pipe(
      switchMap(user => this._user.updateUser({ _id: user?._id, phone: this.user!.phone, name: this.user!.name }).pipe(
        tap(user => {
          localStorage.setItem("ads_user", JSON.stringify(user))
        })
      ))
    ).subscribe()
  }

}
