import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './HomeApp-routing.module';
import { HomeTemplateComponent } from './HomeTemplateComponent';
import { HomePlaceholderComponent } from './HomePlaceholderComponent';

@NgModule({
  declarations: [
    HomeTemplateComponent,
    HomePlaceholderComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [HomePlaceholderComponent]
})
export class HomeModule { }
