import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ABDataService } from '../services/data/abstract-data.service';
import { IPsychological } from './../shema/models/Ipsychological';

@Injectable({
  providedIn: 'root',
})
export class ResolveGuard implements Resolve<any> {
  constructor(private dataService: ABDataService, private router: Router) {}

  test: IPsychological;
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const id = route.paramMap.get('id');
    // this.FakeDataService.getTestQuestionsById(+id!).subscribe((res) => {
    //   this.test = res;
    //   console.log(res);
    // });

    // if (!this.test) {
    //   return of(null).pipe(tap(() => this.router.navigate(['/notItem'])));
    // } else {
    //   return of(this.test);
    // }

    return this.dataService.getTestQuestionsById(+id!).pipe(
      tap((res) => {
        if (!res) {
          this.router.navigate(['/notItem']);
        }
      })
    );
  }
}
