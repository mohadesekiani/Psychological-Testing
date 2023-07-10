import { Injectable } from '@angular/core';
import * as fakeData from '../data/mock-data';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private checkedLogin: boolean = false;

  constructor( private storageService:StorageService) { }
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
}
