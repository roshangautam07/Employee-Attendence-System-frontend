import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from 'src/EmployeeApp/EmployeeAttendanceComponent';
import { EmployeeComponent } from 'src/EmployeeApp/EmployeeComponent';
import { Login } from 'src/LoginApp/LoginComponent';
import { MyAuthGuard } from 'src/Services/AuthGuard';

const EmployeeRoutes: Routes = [
  {path:'add',component:EmployeeComponent,canActivate:[MyAuthGuard]},
  {path:'list',component:AttendanceComponent,canActivate:[MyAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(EmployeeRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
