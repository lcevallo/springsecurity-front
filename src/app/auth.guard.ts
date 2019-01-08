import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     if (localStorage.getItem('currentUser')) {
       return true;
     }
     this.router.navigate(['/login']);
     return false;
  }
}
