import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "src/app/models/category.model";
import { LoadingService } from "./loading.service";
import { tap } from "rxjs";

@Injectable()
export class CategoryService {

    constructor(private _http: HttpClient, private _loading: LoadingService) { }

    readonly baseUrl = "http://localhost:3000/api/v1/categories"

    findAll() {
        this._loading.showLoading();
        return this._http.get<Category[]>(this.baseUrl).pipe(
            tap(()=>this._loading.hideLoading())
        );
    }
}