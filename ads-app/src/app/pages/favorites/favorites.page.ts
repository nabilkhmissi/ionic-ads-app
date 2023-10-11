import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/app/models/ad.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(
    private _user: UserService,
    private _auth: AuthService,
    private _loading: LoadingService) {
    this._auth.getUserFromLS();
    this._auth.authenticatedUser$.subscribe(
      user => this.user = user
    )
  }
  user: User | null = null;
  likes: Ad[] = []
  loading$ = this._loading.loading$;

  ngOnInit() {
    if (this.user) {
      this._user.getLikedByUser(this.user._id).subscribe(
        data => {
          this.likes = data
        }
      )
    }
  }

}
