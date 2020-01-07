import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page.component';
import {MainPageCardBigComponent} from './main-page/main-page-card/main-page-card-big/main-page-card-big.component';
import {MainPageCardSmallComponent} from './main-page/main-page-card/main-page-card-small/main-page-card-small.component';
import {AddLectureComponent} from './add-lecture/add-lecture.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {firebaseConfig} from '../../FirebaseConfig';
import { LoginComponent } from './login/login.component';
import { LectureCardBigComponent } from './add-lecture/add-lecture-card/lecture-card-big/lecture-card-big.component';
import { LectureCardSmallComponent } from './add-lecture/add-lecture-card/lecture-card-small/lecture-card-small.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainPageCardBigComponent,
    MainPageCardSmallComponent,
    AddLectureComponent,
    LoginComponent,
    LectureCardBigComponent,
    LectureCardSmallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
