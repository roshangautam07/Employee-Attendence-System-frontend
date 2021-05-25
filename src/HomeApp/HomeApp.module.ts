import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomeRoutingModule } from './HomeApp-routing.module';
import { HomeTemplateComponent } from './HomeTemplateComponent';
import { HomePlaceholderComponent } from './HomePlaceholderComponent';
import { EmployeeComponent } from 'src/EmployeeApp/EmployeeComponent';

@NgModule({
  declarations: [
    HomeTemplateComponent,
    HomePlaceholderComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [HomePlaceholderComponent]
})
export class HomeModule { }
