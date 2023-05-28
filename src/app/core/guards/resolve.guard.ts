// import { Injectable } from '@angular/core';
// import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { FakeDataService } from '../services/data/fake-data.service';
// import { IPsychological } from '../shema/models/Ipsychological';
// import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'

// })
// export class ResolveGuard implements Resolve<IPsychological> {
//   constructor( private  FakeDataService:FakeDataService,private router:Router,private route:ActivatedRoute){}
//   resolve(next: ActivatedRouteSnapshot, 
//     state: RouterStateSnapshot): Observable<IPsychological | UrlTree> | Promise<IPsychological | UrlTree> | IPsychological | UrlTree {
// const id = this.route.paramMap.get('id')
  

// }

// }
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { FakeDataService } from 'src/app/core/services/data/fake-data.service';
import { map } from 'rxjs/operators';
import { IPsychological } from '../shema/models/Ipsychological';
@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<IPsychological> {
  constructor(private FakeDataService: FakeDataService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IPsychological | UrlTree>{
    const id = route.paramMap.get('id');
    let test = this.FakeDataService.getFakedata().find(item => item.id === +id!);
    if (!test) {
      return of(null).pipe(
        delay(5000),
        tap(() => this.router.navigate(['/psychologicalIPsychological/notItem']))
      );
    } else {
      return of(test).pipe(delay(5000));

    
    }
  }
}