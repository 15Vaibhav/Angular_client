import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';




import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientComponent } from './components/client/client.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {ClientService} from './services/client.service'

const appRoutes: Routes = [
  { path: '',redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup',component: SignUpComponent},
  {path:'home',component:ClientComponent},
  { path: '**', component: PageNotFoundComponent }
];

const config = {
  apiKey: "AIzaSyDjgtKWZSYCeSjMPw5ESpXsElozfRYHeBk",
  authDomain: "angular-client-227417.firebaseapp.com",
  databaseURL: "https://angular-client-227417.firebaseio.com",
  storageBucket: "angular-client-227417.appspot.com",
  messagingSenderId: "70956438602"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientComponent,
    SignUpComponent,
    LoginComponent,
    PageNotFoundComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule

  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
