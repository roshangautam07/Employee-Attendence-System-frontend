import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { EmployeeComponent } from 'src/EmployeeApp/EmployeeComponent';
import { AttendanceComponent } from 'src/EmployeeApp/EmployeeAttendanceComponent';
import { EmployeeService } from 'src/Services/EmployeeServices';
import { JwtInterceptor } from 'src/Services/JwtInterceptor';
import { MyAuthGuard } from 'src/Services/AuthGuard';
import { EmployeeRoutingModule } from './EmployeeApp.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    EmployeeComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EmployeeService,
    MyAuthGuard,{
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptor,multi:true
    }
  ],
  bootstrap: [EmployeeComponent]
})
export class EmployeeModule { }
