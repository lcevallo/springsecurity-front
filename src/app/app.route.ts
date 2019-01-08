import {Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AdmindashboardComponent} from './admindashboard/admindashboard.component';
import {UserdashboardComponent} from './userdashboard/userdashboard.component';
import {AuthGuard} from './auth.guard';

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admindashboard', component: AdmindashboardComponent, canActivate: [AuthGuard]},
  {path: 'userdashboard', component: UserdashboardComponent,  canActivate: [AuthGuard]},

  {path: '**', pathMatch: 'full', redirectTo: 'home'}

]
