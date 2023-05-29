import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { FakeDataService } from 'src/app/core/services/data/fake-data.service';

import { IPsychological } from '../shema/models/Ipsychological';


@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
constructor(private FakeDataService:FakeDataService,private router:Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>  {
  const id = route.paramMap.get('id');
  let test = this.FakeDataService.getFakedata().find(test =>test.id === +id!)
  console.log( id,test);
  
  if(!test){    
    return of(null).pipe(
      tap(()=> this.router.navigate(['/notItem']))
      )
    }else{
     return of(test)
  }

  }

}
