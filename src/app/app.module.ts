import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { LoginComponent } from './login/login.component';

const firebaseConfig= {
  apiKey: "AIzaSyBgGlTS1r19MTEAUbNQh_0Sq0J7J38hnKM",
  authDomain: "shenoyfr.firebaseapp.com",
  databaseURL: "https://shenoyfr.firebaseio.com",
  projectId: "shenoyfr",
  storageBucket: "shenoyfr.appspot.com",
  messagingSenderId: "195822991161",
  appId: "1:195822991161:web:3fc70b5c1c2af55a0fdae8",
  measurementId: "G-30856F51NL"
}
@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
