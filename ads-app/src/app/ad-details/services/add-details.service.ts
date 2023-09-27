import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Response } from "../../models/response.model";

@Injectable()
export class AdDetailsService {
    constructor(private _http: HttpClient) { }


    readonly baseUrl = "http://localhost:3000/api/v1"

    getAdById(id: string) {
        return this._http.get<Response>(`${this.baseUrl}/ads/${id}`).pipe(
            map(response => response.data),
        )
    }
}