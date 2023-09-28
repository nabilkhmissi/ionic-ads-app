import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Ad } from "src/app/models/ad.model";
import { Response } from "src/app/models/response.model";

@Injectable()
export class AdsService {

    constructor(private _http: HttpClient) { }

    readonly baseUrl = "http://localhost:3000/api/v1/ads";

    addAd(ad: any) {
        return this._http.post(`${this.baseUrl}`, ad).pipe(
            tap(resp => console.log(resp))
        )
    }

    getAdsByUserId(id: string) {
        return this._http.get<Response>(`${this.baseUrl}/user/${id}`).pipe(
            map(res => res.data)
        )
    }
}