import {Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'home'}

]
