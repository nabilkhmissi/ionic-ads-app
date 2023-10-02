import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, EMPTY, catchError, tap } from "rxjs";
import { AuthResponse } from "src/app/models/auth-response.model";
import { User } from "src/app/models/user.model";
import { AlertService } from "./alert.service";
import { Router } from "@angular/router";
import { LoadingService } from "./loading.service";
import { ToastService } from "./toast.service";

@Injectable()
export class AuthService {

    constructor(
        private _http: HttpClient,
        private _loading: LoadingService,
        private _alert: AlertService,
        private _router: Router,
        private _toast: ToastService) { }

    readonly baseUrl = "http://localhost:3000/api/v1"

    private authUserSubject = new BehaviorSubject<User | null>(null);

    authenticatedUser$ = this.authUserSubject.asObservable();

    setAuthUser(user: User) {
        this.authUserSubject.next(user)
    }

    clearAuthUser() {
        this.authUserSubject.next(null)
    }

    logout() {
        this.clearAuthUser();
        localStorage.removeItem("ads_user");
        window.location.reload();
    }

    login(email: string, password: string) {
        this._loading.showLoading()
        return this._http.post<AuthResponse>(`${this.baseUrl}/auth/login`, { email, password }).pipe(
            tap(response => {
                this.doLogin(response.user)
                this._router.navigate(['']).then(
                    () => window.location.reload()
                )
                this._loading.hideLoading();
            }),
            catchError(error => {
                this._loading.hideLoading();
                this._alert.showNotification(error.error.message);
                return EMPTY
            })
        )
    }

    register(email: string, password: string, name: string, phone: string) {
        this._loading.showLoading()
        return this._http.post<any>(`${this.baseUrl}/auth/register`, { email, password, name, phone }).pipe(
            tap(response => {
                this._loading.hideLoading()
                this._toast.showToast(response.message);
                this._router.navigate(['/login'])
            }),
            catchError(error => {
                this._loading.hideLoading()
                this._alert.showNotification(error.error.message);
                return EMPTY
            })
        )
    }


    doLogin(user: User) {
        this.setAuthUser(user)
        this.saveUserToLS(user)
    }

    saveUserToLS(user: User) {
        localStorage.setItem("ads_user", JSON.stringify(user))
    }

    getUserFromLS() {
        const data = localStorage.getItem("ads_user")
        if (data) {
            this.setAuthUser(JSON.parse(data))
        }
    }
}