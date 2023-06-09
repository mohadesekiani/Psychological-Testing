import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Iauth } from '../../shema/models/Iauth';
import { ABDataService } from './abstract-data.service';

@Injectable({
  providedIn: 'root',
})
/**
 * useinng for real api call on production mode
 */
export class DataService extends ABDataService {
  getFakedata(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  login(user: Iauth): boolean {
    throw new Error('Method not implemented.');
  }
  checkLoged(): boolean {
    throw new Error('Method not implemented.');
  }
  getTestQuestionsById(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
