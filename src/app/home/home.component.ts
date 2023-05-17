import { Component } from '@angular/core';
import { FakeDataService } from '../core/services/data/fake-data.service';
import { IPsychological } from '../core/shema/models/Ipsychological';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items:IPsychological [];

  constructor(private fakeDataService: FakeDataService) {
    this.items = this.fakeDataService.getFakeData();
    
  }
}
