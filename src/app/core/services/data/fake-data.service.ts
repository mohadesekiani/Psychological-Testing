import { Injectable } from '@angular/core';
import * as fakeData from './fake-data'

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  constructor() { 
    
  }

  getFakeData(): any {
    return fakeData.PsychologicalTests;
  }

}
