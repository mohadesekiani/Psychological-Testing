import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FakeDataService } from '../core/services/data/fake-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items: any[]; // آرایه‌ای برای نگهداری آیتم‌ها

  constructor(private fakeDataService: FakeDataService, private route: ActivatedRoute,private router: Router) {
     this.fakeDataService.getFakedata().subscribe(items => {
      this.items = items;
    });
  }


  selectedTest(id: number) {
      this.router.navigate(['/psychologicalTest/', id]); // صفحه مورد نظر را با آیدی مشخص هدایت می‌کند
     }


}
