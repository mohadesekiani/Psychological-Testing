import { Component, Input } from '@angular/core';

import { LoadingService } from './../core/services/loading/loading.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @Input() isExpanded: boolean = true;
  @Input() isLoading: boolean;
  constructor(public loadingService: LoadingService) {}
  ngOnInit(): void {
    this.loadingService.isLoading$.subscribe((res) => {
      console.log(res, 'loading');
      this.isLoading = res;
    });
  }
}
