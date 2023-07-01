import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Iauth } from '../../shema/models/Iauth';

@Injectable({
  providedIn: 'root',
})
export abstract class ABDataService {
  abstract getFakedata(): Observable<any>;
  abstract getTestQuestionsById(id: number): Observable<any>;
}
