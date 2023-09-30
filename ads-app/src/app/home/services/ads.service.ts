import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Response } from 'src/app/models/response.model';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Injectable()
export class AdsService {

  constructor(
    private _http: HttpClient,
    private _loading: LoadingService
  ) { }

  readonly baseUrl = "http://localhost:3000/api/v1"

  getAllAds() {
    this._loading.showLoading()
    return this._http.get<Response>(`${this.baseUrl}/ads`).pipe(
      map(response => response.data),
      tap((res) => {
        this._loading.hideLoading()
      })
    )
  }
}
