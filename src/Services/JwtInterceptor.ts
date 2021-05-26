import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

import { Token } from './Token';
import { TokenStorageService } from './TokenStorageService';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    helper = new JwtHelperService();
    constructor(private tokenObj: Token,public tokenService:TokenStorageService,private _router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     //   if(!this.helper.isTokenExpired(window.sessionStorage.getItem("auth-token"))){
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.tokenService.getToken()}`
                }
            });
       // }else{
          //  this.tokenService.signOut();
            //this._router.navigate(['login']);
        //}
        return next.handle(request);
    }
}