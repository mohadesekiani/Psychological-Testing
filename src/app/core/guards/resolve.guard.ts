import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { FakeDataService } from 'src/app/core/services/data/fake-data.service';


@Injectable({
  providedIn: 'root'

})
export class ResolveGuard implements Resolve<boolean> {
  constructor(private FakeDataService:FakeDataService, private router:Router,private route:ActivatedRoute){}
  resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const testId = 1;
      console.log("//////",testId);
  //     this.router.navigate(['/not_found']);

  //     return this.FakeDataService.isValidPostId(testId);
  // }
  if (this.FakeDataService.isValidPostId(testId)){
    return true; // اجازه دسترسی به صفحه مورد نظر
  } else {
    this.router.navigate(['psychologicalTest/404']);
    return false;
  }
}

}
