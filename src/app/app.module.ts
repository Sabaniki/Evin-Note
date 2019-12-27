import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageCardBigComponent } from './main-page/main-page-card/main-page-card-big/main-page-card-big.component';
import { MainPageCardSmallComponent } from './main-page/main-page-card/main-page-card-small/main-page-card-small.component';
import { AddLectureComponent } from './add-lecture/add-lecture.component';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainPageCardBigComponent,
    MainPageCardSmallComponent,
    AddLectureComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
