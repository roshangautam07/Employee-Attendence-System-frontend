import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from 'src/EmployeeApp/EmployeeComponent';
import { HomeTemplateComponent } from './HomeTemplateComponent';

const HomeRoutes: Routes = [
  {path:'',component:HomeTemplateComponent},
  {path:'Employee',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(HomeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
