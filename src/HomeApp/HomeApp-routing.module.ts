import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from 'src/EmployeeApp/EmployeeAttendanceComponent';
import { EmployeeComponent } from 'src/EmployeeApp/EmployeeComponent';
import { Login } from 'src/LoginApp/LoginComponent';
import { MyAuthGuard } from 'src/Services/AuthGuard';
import { HomeTemplateComponent } from './HomeTemplateComponent';

const HomeRoutes: Routes = [
  {path:'',component:HomeTemplateComponent,canActivate:[MyAuthGuard]},
  {path:'Employee',component:EmployeeComponent,canActivate:[MyAuthGuard]},
  {path:'attendances',component:AttendanceComponent,canActivate:[MyAuthGuard]},
  {path:'login',component:Login}
];

@NgModule({
  imports: [RouterModule.forRoot(HomeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
