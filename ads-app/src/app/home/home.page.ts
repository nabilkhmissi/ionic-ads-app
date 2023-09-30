import { Component, OnInit } from '@angular/core';
import { AdsService } from './services/ads.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private _ads: AdsService, private _auth: AuthService) {
    _auth.getUserFromLS()
  }

  ads$ = this._ads.getAllAds();
  authUser$ = this._auth.authenticatedUser$;
  ngOnInit() {

  }
}
