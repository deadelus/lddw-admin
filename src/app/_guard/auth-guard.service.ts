import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private routing: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if(localStorage.getItem('logged') === 'true'){ 
      //logged
      return true;
    }

    this.routing.navigate(['/login']);
    return false;
  }

  canActivateChild() {
    return true;
  }

}
