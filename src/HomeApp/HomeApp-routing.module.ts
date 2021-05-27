import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login } from 'src/LoginApp/LoginComponent';
import { MyAuthGuard } from 'src/Services/AuthGuard';
import { HomeTemplateComponent } from './HomeTemplateComponent';

const HomeRoutes: Routes = [
  {path:'',component:HomeTemplateComponent,canActivate:[MyAuthGuard]},
  {path:'Employee',loadChildren: () => import('../EmployeeApp/EmployeeApp.module')
  .then(m =>m.EmployeeModule),canActivate : [MyAuthGuard]},
  {path:'attendances',loadChildren: () => import('../EmployeeApp/EmployeeApp.module')
  .then(m =>m.EmployeeModule),canActivate : [MyAuthGuard]},
  {path:'login',component:Login}
];

@NgModule({
  imports: [RouterModule.forRoot(HomeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
