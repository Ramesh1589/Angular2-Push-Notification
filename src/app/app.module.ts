import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PushNotificationsModule } from 'angular2-notifications'; //import the module

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PushNotificationsModule //add it to the imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
