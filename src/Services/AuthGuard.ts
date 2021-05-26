import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Token } from './Token'
import { TokenStorageService } from './TokenStorageService';

@Injectable()
export class MyAuthGuard implements CanActivate {


  constructor( private _router: Router ,public _token : Token,public tokenService:TokenStorageService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.tokenService.getToken().length!=0) {
        return true;
    }

    // const tok = this.tokenService.getToken();
    // if(tok.length!=0){
    //   return true;
    // }

    // navigate to login page
    this._router.navigate(['/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}