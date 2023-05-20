import { Injectable } from '@angular/core';
import * as fakeData from './mock-data'
import { IPsychological } from '../../shema/models/Ipsychological';
import { AbFakeDataService } from './ab-fake-data.service';
import { Iauth } from '../../shema/models/iauth';
@Injectable({
  providedIn: 'root'
})
export class FakeDataService extends AbFakeDataService{


  public getFakedata(): Array<IPsychological> {
    return fakeData.PsychologicalTests;
  }
  public login(user:Iauth): boolean {
    if (user.username === fakeData.user.username && user.password === fakeData.user.password) {
      console.log(user,true);
      
      
      // // اطلاعات ورود صحیح است
       return true;
    } else {
      console.log(user,false);

      // اطلاعات ورود نامعتبر است
      return false;
    }
  }
   
}
