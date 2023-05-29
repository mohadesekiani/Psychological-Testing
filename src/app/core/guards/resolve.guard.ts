import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { FakeDataService } from 'src/app/core/services/data/fake-data.service';

import { IPsychological } from '../shema/models/Ipsychological';


@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<IPsychological> {
constructor(private FakeDataService:FakeDataService,private router:Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IPsychological | Observable<IPsychological> | Promise<IPsychological> {

  const id = route.paramMap.get('id');
  let test = this.FakeDataService.getFakedata().find(test =>test.id === +id!)
  console.log(test);

  if(test){
    return of(test).pipe(delay(5000))


  }else{
    return of(null).pipe(
      delay(5000),
      tap(()=>this.router.navigate(['/psychologicalTest/notItem']))
    )
  }
  }



}
