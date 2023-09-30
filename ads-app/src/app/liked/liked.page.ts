import { Component, OnInit } from '@angular/core';
import { AdsService } from '../shared/services/ads.service';
import { AuthService } from '../shared/services/auth.service';
import { of, switchMap } from 'rxjs';
import { Ad } from '../models/ad.model';
import { User } from '../models/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.page.html',
  styleUrls: ['./liked.page.scss'],
})
export class LikedPage implements OnInit {


  constructor(private _user: UserService,
    private _auth: AuthService) {
    this._auth.getUserFromLS()
  }

  user: User | null = null;
  likes: Ad[] = []
  ngOnInit() {
    this._auth.authenticatedUser$.subscribe(
      user => this.user = user
    )
    if (this.user) {
      this._user.getLikedByUser(this.user?._id).subscribe(
        data => {
          this.likes = data
        }
      )
    }
  }

}
