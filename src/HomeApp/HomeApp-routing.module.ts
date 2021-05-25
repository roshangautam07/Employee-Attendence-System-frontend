import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTemplateComponent } from './HomeTemplateComponent';

const HomeRoutes: Routes = [
  {path:'',component:HomeTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(HomeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }