import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from 'src/EmployeeApp/EmployeeAttendanceComponent';
import { EmployeeComponent } from 'src/EmployeeApp/EmployeeComponent';
import { HomeTemplateComponent } from './HomeTemplateComponent';

const HomeRoutes: Routes = [
  {path:'',component:HomeTemplateComponent},
  {path:'Employee',component:EmployeeComponent},
  {path:'attendances',component:AttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(HomeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
