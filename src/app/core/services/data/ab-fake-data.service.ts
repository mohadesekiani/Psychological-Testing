import { Injectable } from '@angular/core';

import { Iauth } from '../../shema/models/Iauth';
import { IPsychological } from '../../shema/models/Ipsychological';

@Injectable({
  providedIn: 'root'
})
export abstract class AbFakeDataService {

  abstract getFakedata():Array<IPsychological>;
  abstract login(user:Iauth):boolean;
  abstract checkLoged():boolean;
  abstract isValidPostId(testId:number): boolean;


}
