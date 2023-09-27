import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, EMPTY, catchError, tap } from "rxjs";
import { AuthResponse } from "src/app/models/auth-response.model";
import { User } from "src/app/models/user.model";
import { LoadingService } from "./loading.service";
import { AlertService } from "./alert.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

    constructor(
        private _http: HttpClient,
        private _loading: LoadingService,
        private _alert: AlertService,
        private _router: Router
    ) { }

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
        localStorage.removeItem("ads_user")
    }

    login(email: string, password: string) {
        this._loading.showLoading()
        return this._http.post<AuthResponse>(`${this.baseUrl}/auth/login`, { email, password }).pipe(
            tap(response => {
                this.doLogin(response.data)
                this._loading.hideLoading()
                this._router.navigate([''])
            }),
            catchError(error => {
                this._loading.hideLoading()
                this._alert.showNotification("Oops! Something goes wrong");
                return EMPTY
            })
        )
    }

    register(email: string, password: string, name: string) {
        this._loading.showLoading()
        return this._http.post<AuthResponse>(`${this.baseUrl}/auth/register`, { email, password, name }).pipe(
            tap(response => {
                console.log(response)
                /* 
                this.doLogin(response.data)
                this._loading.hideLoading()
                this._router.navigate(['']) */
            }),
            catchError(error => {
                this._loading.hideLoading()
                this._alert.showNotification("Oops! Something goes wrong");
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