import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, map, of, switchMap, tap } from "rxjs";
import { Response } from "src/app/models/response.model";
import { LoadingService } from "./loading.service";
import { AlertService } from "./alert.service";
import { ToastService } from "./toast.service";

@Injectable()
export class AdsService {

    constructor(private _http: HttpClient,
        private _laoding: LoadingService,
        private _alert: AlertService,
        private _toast: ToastService) { }

    readonly baseUrl = "http://localhost:3000/api/v1/ads";


    searchSubject = new BehaviorSubject<string | null>(null)
    search$ = this.searchSubject.asObservable();


    allAds$ = this.getAllAds();

    filteredAds$ = combineLatest(([this.allAds$, this.search$])).pipe(
        switchMap(([ads, search]) => {
            if (!search || search?.length === 0) {
                return this.getAllAds()
            }
            return this.findByTitle(search)
        })
    )

    addAd(ad: any) {
        this._laoding.showLoading();
        return this._http.post<any>(`${this.baseUrl}`, ad).pipe(
            tap((res) => {
                this._toast.showToast("Ad added successfully")
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

    getAllAds() {
        this._laoding.showLoading()
        return this._http.get<Response>(`${this.baseUrl}`).pipe(
            map(response => response.data),
            tap((res) => {
                this._laoding.hideLoading()
            })
        )
    }

    findByTitle(keyword: string) {
        this._laoding.showLoading();
        return this._http.get<Response>(`${this.baseUrl}/search?title=${keyword}`).pipe(
            map(res => res.data),
            tap(() => this._laoding.hideLoading())
        )
    }
}