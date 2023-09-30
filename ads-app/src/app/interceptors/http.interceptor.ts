import { HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay } from "rxjs";

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
    constructor() { }


    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const delayedRequest = req.clone();
        return next.handle(delayedRequest).pipe(
            delay(1000)
        );
    }

}