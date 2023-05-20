import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../core/services/data/fake-data.service';
import { IPsychological } from '../core/shema/models/Ipsychological';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  items: IPsychological[];

  constructor(private fakeDataService: FakeDataService, private route: ActivatedRoute,private router: Router) {
    this.items = this.fakeDataService.getFakedata();
  }

  selectedTest(id: number) {
      this.router.navigate(['/psychologicalTest/', id]); // صفحه مورد نظر را با آیدی مشخص هدایت می‌کند
     }


  
}
