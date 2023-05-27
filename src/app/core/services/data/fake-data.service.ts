import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Iauth } from '../../shema/models/Iauth';
import { IPsychological } from '../../shema/models/Ipsychological';
import { AbFakeDataService } from './ab-fake-data.service';
import * as fakeData from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService extends AbFakeDataService{
  private checkedLogin:boolean = false;
    constructor( private router: Router){
      super();
    }
  public getFakedata(): Array<IPsychological> {
    return fakeData.PsychologicalTests;
  }
  public login(user:Iauth): boolean {
    if (user.username === fakeData.user.username && user.password === fakeData.user.password) {
      this.checkedLogin =true;

      // // اطلاعات ورود صحیح است
       return this.checkedLogin;
    } else {
      console.log(user,false);
      this.checkedLogin = false;
      // اطلاعات ورود نامعتبر است
      return this.checkedLogin;
    }
  }
  public checkLoged(): boolean {
    return this.checkedLogin
  }
  public isValidPostId(testId:number): boolean {
      if(testId){
        console.log("111111111111",testId);

      return true;
      }else{
        console.log("......");
        return false;
      }
  }

}
