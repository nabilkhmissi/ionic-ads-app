import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { AuthService } from '../shared/services/auth.service';
import { switchMap, tap } from 'rxjs';
import { User } from '../models/user.model';

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
