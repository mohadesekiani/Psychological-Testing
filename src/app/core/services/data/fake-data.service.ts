import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of } from 'rxjs';

import { Iauth } from '../../shema/models/Iauth';
import { ABStorageService } from '../storage/ab-storage.service';
import { ABDataService } from './abstract-data.service';
import * as fakeData from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class FakeDataService extends ABDataService {
  private checkedLogin: boolean = false;
  private checkedId: boolean = false;
  constructor(
    private router: Router,
    private storageService: ABStorageService
  ) {
    super();
  }
  /**
   * Receive fack data
   * @returns -  fack data in the format observeble
   */
  public getFakedata(): Observable<any> {
    return of(fakeData.PsychologicalTests).pipe(delay(3000));
  }
  /**
   * login
   * @param user  -user interformation
   * @returns -login  (true or false)
   */
  public login(user: any): boolean {
    console.log(user);
    user._token = fakeData.user._token;
    if (
      user.username === fakeData.user.userInfo.username &&
      user.password === fakeData.user.userInfo.password
    ) {
      this.checkedLogin = true;

      this.storageService.setStorage('_token', user._token);
      // // اطلاعات ورود صحیح است
      return this.checkedLogin;
    } else {
      console.log(user, false);
      this.checkedLogin = false;
      // اطلاعات ورود نامعتبر است
      return this.checkedLogin;
    }
  }
  /**
   * Checking the login status
   * @returns -  Login status (true or false)
   */
  public checkLoged(): boolean {
    return this.checkedLogin;
  }
  /**
   * Receive test questions based on ID
   * @param id -test ID
   * @returns - Test questions in the format observeble
   */
  public getTestQuestionsById(id: number): Observable<any> {
    return of(fakeData.PsychologicalTests.find((item) => item.id === +id)).pipe(
      delay(3000)
    );
  }
}
