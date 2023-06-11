import { Component, Input } from '@angular/core';
import { ABStorageService } from '../core/services/storage/ab-storage.service';

import { LoadingService } from './../core/services/loading/loading.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @Input() isExpanded: boolean = true;
  @Input() isLoading: boolean;
  token = this.storageService.getStorage('_token');
  decodedToken = jwt_decode(this.token);
  nameValue;
  constructor(
    public loadingService: LoadingService,
    private storageService: ABStorageService
  ) {}
  ngOnInit(): void {
    const token = this.storageService.getStorage('_token');
    const decodedToken = jwt_decode(token) as { name: string };
    this.nameValue = decodedToken.name;

    this.loadingService.isLoading$.subscribe((res) => {
      console.log(res, 'loading');
      this.isLoading = res;
    });
  }
}
