import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ROUTES} from './app.route';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserdashboardComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
