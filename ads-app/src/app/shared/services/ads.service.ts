import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Response } from "src/app/models/response.model";
import { LoadingService } from "./loading.service";
import { AlertService } from "./alert.service";

@Injectable()
export class AdsService {

    constructor(private _http: HttpClient, private _laoding: LoadingService, private _alert: AlertService) { }

    readonly baseUrl = "http://localhost:3000/api/v1/ads";

    addAd(ad: any) {
        this._laoding.showLoading();
        return this._http.post<any>(`${this.baseUrl}`, ad).pipe(
            tap((res) => {
                this._alert.showNotification(res.message)
                this._laoding.hideLoading()
            })
        )
    }

    getAdsByUserId(id: string) {
        this._laoding.showLoading();
        return this._http.get<Response>(`${this.baseUrl}/user/${id}`).pipe(
            map(res => res.data),
            tap(() => this._laoding.hideLoading())
        )
    }
}