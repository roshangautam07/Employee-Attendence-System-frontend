import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/Services/Token';
import { TokenStorageService } from 'src/Services/TokenStorageService';

@Component({
  selector: 'app-root',
  templateUrl: './HomeTemplateComponent.html',
  styleUrls: ['./app.component.css']
})
export class HomeTemplateComponent {
  
  constructor(public token:Token,public tokenService:TokenStorageService, public router:Router){}

  
  logout(){
    //this.token.token="";
    this.tokenService.signOut();
    this.router.navigate(['login']);
  }

}
