import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AppComponent,
  ViewChildComponent,
  ContentChildComponent,
  QueryComponent
} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewChildComponent,
    ContentChildComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
