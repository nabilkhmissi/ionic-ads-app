import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, catchError, map, switchMap, tap } from "rxjs";
import { Ad } from "src/app/models/ad.model";
import { Response } from "src/app/models/response.model";
import { LoadingService } from "./loading.service";
import { AuthService } from "./auth.service";
import { AlertService } from "./alert.service";
import { ToastService } from "./toast.service";

@Injectable()
export class UserService {

    constructor(private _http: HttpClient,
        private _loading: LoadingService,
        private _auth: AuthService,
        private _alert: AlertService,
        private _toast: ToastService) { }

    readonly baseUrl = "http://localhost:3000/api/v1/user";

    addToLikes(ad: Ad) {
        this._loading.showLoading();
        return this._auth.authenticatedUser$.pipe(
            switchMap(user => {
                if (user) {
                    return this._http.post(`${this.baseUrl}/${user._id}/likes`, { _id: ad._id }).pipe(
                        tap(resp => {
                            this._loading.hideLoading()
                        })
                    )
                }
                return EMPTY;
            }),
            catchError(error => {
                this._loading.hideLoading();
                this._alert.showNotification(error.error.message);
                return EMPTY
            })
        )
    }

    getAdsByUserId(id: string) {
        this._loading.showLoading();
        return this._http.get<Response>(`${this.baseUrl}/${id}`).pipe(
            map(res => res.data),
            tap(() => this._loading.hideLoading())
        )
    }

    getLikedByUser(userId: string) {
        this._loading.showLoading();
        return this._http.get<Response>(`${this.baseUrl}/${userId}/likes`).pipe(
            map(res => res.data),
            tap(() => this._loading.hideLoading())
        )
    }


    getUserById(id: string) {
        this._loading.showLoading();
        return this._http.get<Response>(`${this.baseUrl}/${id}`).pipe(
            map(res => res.data),
            tap(() => this._loading.hideLoading())
        )
    }

    updateUser(user: { _id?: string, phone?: string, name?: string }) {
        this._loading.showLoading();
        return this._http.post<Response>(`${this.baseUrl}/${user._id}`, user).pipe(
            map(res => res.data),
            tap(() => {
                this._toast.showToast("Your account updated successfully")
                this._loading.hideLoading()
            })
        )
    }
}