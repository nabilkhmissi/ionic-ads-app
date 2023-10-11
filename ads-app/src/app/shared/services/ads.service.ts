import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, tap } from "rxjs";
import { Response } from "src/app/models/response.model";
import { LoadingService } from "./loading.service";
import { ToastService } from "./toast.service";
import { Router } from "@angular/router";
import { Ad } from "src/app/models/ad.model";

@Injectable()
export class AdsService {

    constructor(private _http: HttpClient,
        private _laoding: LoadingService,
        private _router: Router,
        private _toast: ToastService) { }

    readonly baseUrl = "http://localhost:3000/api/v1/ads";

    private adsSubject = new BehaviorSubject<Ad[]>([])
    ads$ = this.adsSubject.asObservable();

    getAdById(id: string) {
        return this._http.get<Response>(`${this.baseUrl}/${id}`).pipe(
            map(response => response.data),
        )
    }

    addAd(ad: any) {
        this._laoding.showLoading();
        return this._http.post<any>(`${this.baseUrl}`, ad).pipe(
            tap((res) => {
                this.initAds()
                this._toast.showToast("Ad added successfully")
                this._laoding.hideLoading();
                this._router.navigate(['/home'])
            })
        )
    }

    getAdsByUserId(id: string) {
        this._laoding.showLoading();
        return this._http.get<Response>(`${this.baseUrl}/user/${id}`).pipe(
            map(res => {
                this._laoding.hideLoading()
                return res.data
            })
        )
    }

    getAllAds() {
        this._laoding.showLoading()
        return this._http.get<Response>(`${this.baseUrl}`).pipe(
            map(response => {
                this._laoding.hideLoading();
                return response.data
            }),
        )
    }

    initAds() {
        this.getAllAds().subscribe(
            response => {
                this.adsSubject.next(response)
            }
        )
    }

    findByCategory(category: string) {
        this._laoding.showLoading()
        return this._http.get<Response>(`${this.baseUrl}?category=${category}`).pipe(
            tap(response => {
                this._laoding.hideLoading();
                console.log(response)
                this.adsSubject.next(response.data);
            }),
        ).subscribe()
    }
}