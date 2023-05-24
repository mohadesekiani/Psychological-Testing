import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FakeDataService } from 'src/app/core/services/data/fake-data.service';

//import { FakeDataService } from '../services/data/fake-data.service';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {
constructor( private FakeDataService:FakeDataService , private router:Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.FakeDataService.checkLoged()){
      return true; // اجازه دسترسی به صفحه مورد نظر
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }

}
