import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Token } from "src/Services/Token";
import { TokenStorageService } from "src/Services/TokenStorageService";
import { Users } from "./LoginModel";

@
Component({
    templateUrl: './LoginComponent.html',
    styleUrls:['./LoginComponent.css']
  
  })
  export class Login {
    userOb:Users = new Users();
    constructor(
      public router:Router,
      public http:HttpClient,
      public token:Token,
      public tokenService:TokenStorageService
      ) { }
      ngOnInit(): void {
        if(this.tokenService.getToken()!=null){
          this.router.navigate(['']);
        }
      }

      login(){
          this.http.post(`https://localhost:5001/Auth/Logins`,this.userOb)
          .subscribe(res=>this.success(res),
          res=>this.Error(res));
      }

      success(res: any) {
        //this.token.token=res.token;
     this.tokenService.saveToken(res.token);
          this.router.navigate(['']);
       }
     
       Error(res: any) {
         alert(res.error.message);
       }

    }