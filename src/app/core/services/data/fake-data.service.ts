import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of } from 'rxjs';

import { Iauth } from '../../shema/models/Iauth';
import { AbFakeDataService } from './ab-fake-data.service';
import * as fakeData from './mock-data';

2;
@Injectable({
  providedIn: 'root',
})
export class FakeDataService extends AbFakeDataService {
  private checkedLogin: boolean = false;
  private checkedId: boolean = false;
  constructor(private router: Router) {
    super();
  }
  public getFakedata(): Observable<any> {
    return of(fakeData.PsychologicalTests).pipe(delay(3000));
  }
  public login(user: Iauth): boolean {
    if (
      user.username === fakeData.user.username &&
      user.password === fakeData.user.password
    ) {
      this.checkedLogin = true;

      // // اطلاعات ورود صحیح است
      return this.checkedLogin;
    } else {
      console.log(user, false);
      this.checkedLogin = false;
      // اطلاعات ورود نامعتبر است
      return this.checkedLogin;
    }
  }
  public checkLoged(): boolean {
    return this.checkedLogin;
  }
  //TODO مطالعه
  public getTestQuestionsById(id: number): Observable<any> {
    //return of(fakeData.PsychologicalTests.find((item) => item.id === +id));
    return of(fakeData.PsychologicalTests.find((item) => item.id === +id)).pipe(
      delay(3000)
    );
  }
}
