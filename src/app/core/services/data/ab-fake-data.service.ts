import { Injectable } from '@angular/core';
import { IPsychological } from '../../shema/models/Ipsychological';
import { Iauth } from '../../shema/models/iauth';
@Injectable({
  providedIn: 'root'
})
export abstract class AbFakeDataService {
  
  abstract getFakedata():Array<IPsychological>;
  abstract login(user:Iauth):boolean;

}
