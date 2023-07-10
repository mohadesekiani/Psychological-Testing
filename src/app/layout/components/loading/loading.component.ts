import { Component, Input } from '@angular/core';

import { LoadingService } from '../../../core/services/loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @Input() isLoading: boolean;

  constructor(public loadingService: LoadingService) {}

  // ngOnInit(): void {
  //   this.loadingService.isLoading$.subscribe((res: boolean) => {
  //     this.isLoading = res ? true : false;
  //     console.log(res);
  //   });
  // }
}
