import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

import { ABDataService } from '../services/data/abstract-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.checkLoged()) {
      console.log('log', this.authService.checkLoged());

      return true; // اجازه دسترسی به صفحه مورد نظر
    } else {
      this.router.navigate(['/auth/login']);
      console.log('log', this.authService.checkLoged());

      return false;
    }
  }
}
