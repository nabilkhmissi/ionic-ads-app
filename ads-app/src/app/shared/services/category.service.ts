import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "src/app/models/category.model";

@Injectable()
export class CategoryService {

    constructor(private _http: HttpClient) { }

    readonly baseUrl = "http://localhost:3000/api/v1/categories"

    findAll() {
        return this._http.get<Category[]>(this.baseUrl);
    }
}