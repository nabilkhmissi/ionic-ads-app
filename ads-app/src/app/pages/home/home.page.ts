import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { AdsService } from 'src/app/shared/services/ads.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private _ads: AdsService,
    private _loading: LoadingService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _auth: AuthService
  ) {
    this._ads.initAds();
    _auth.getUserFromLS();
  }
  loading$ = this._loading.loading$;
  ads$ = this._ads.ads$;
  authUser$ = this._auth.authenticatedUser$;



  ngOnInit() {
    this._activatedRoute.queryParamMap.pipe(
      tap(queryParams => {
        let query = queryParams.get('category')
        if (query) {
          this._ads.findByCategory(query)
        }
      })
    ).subscribe()
  }
  create() {
    this._router.navigateByUrl("create")
  }
}
