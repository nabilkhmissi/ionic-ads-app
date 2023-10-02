import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { AdsService } from 'src/app/shared/services/ads.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

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
    private _router: Router,
    private _loading: LoadingService) {
    _auth.getUserFromLS()
  }

  searchbar = false;

  loading$ = this._loading.loading$;

  ads$ = this._ads.filteredAds$.pipe(
    tap(res => {
      this.empty = res.length === 0 ? true : false
    })
  );
  authUser$ = this._auth.authenticatedUser$;
  ngOnInit() {

  }

  doSearch() {
    this.keyword = "";
    this.searchbar = !this.searchbar
  }

  handleSearch(e: any) {
    this._ads.searchSubject.next(e.target.value)
  }

  goToAdd() {
    this._router.navigateByUrl("/add-ad")
  }
}
