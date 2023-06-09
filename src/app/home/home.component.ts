import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ABDataService } from '../core/services/data/abstract-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  items: any[]; // آرایه‌ای برای نگهداری آیتم‌ها

  constructor(
    private dataService: ABDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.dataService.getFakedata().subscribe((items) => {
      this.items = items;
    });
  }

  selectedTest(id: number) {
    this.router.navigate(['/psychologicalTest/', id]); // صفحه مورد نظر را با آیدی مشخص هدایت می‌کند
  }
}
