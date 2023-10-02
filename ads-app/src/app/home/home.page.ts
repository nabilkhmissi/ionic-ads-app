import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { tap } from 'rxjs';
import { AdsService } from '../shared/services/ads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  empty = false;
  keyword = "";

  constructor(private _ads: AdsService,
    private _auth: AuthService,
    private _router: Router) {
    _auth.getUserFromLS()
  }

  ads$ = this._ads.filteredAds$.pipe(
    tap(res => {
      this.empty = res.length === 0 ? true : false
    })
  );
  authUser$ = this._auth.authenticatedUser$;
  ngOnInit() {

  }

  handleSearch(e: any) {
    this._ads.searchSubject.next(e.target.value)
  }

  goToAdd() {
    this._router.navigateByUrl("/add-ad")
  }
}
