import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeRoutingModule } from './HomeApp-routing.module';
import { HomeTemplateComponent } from './HomeTemplateComponent';
import { HomePlaceholderComponent } from './HomePlaceholderComponent';
import { EmployeeService } from 'src/Services/EmployeeServices';
import { Token } from 'src/Services/Token';
import { JwtInterceptor } from 'src/Services/JwtInterceptor';
import { MyAuthGuard } from 'src/Services/AuthGuard';
import { Login } from 'src/LoginApp/LoginComponent';
import { TokenStorageService } from 'src/Services/TokenStorageService';

@NgModule({
  declarations: [
    HomeTemplateComponent,
    HomePlaceholderComponent,
    Login
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EmployeeService,
    MyAuthGuard,
    Token,
    TokenStorageService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptor,multi:true
    }
  ],
  bootstrap: [HomePlaceholderComponent]
})
export class HomeModule { }
