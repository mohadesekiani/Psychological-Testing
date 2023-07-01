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
  constructor() {
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
