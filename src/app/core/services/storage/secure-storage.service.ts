import { Injectable } from '@angular/core';
import { AbStorageService } from './ab-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SecureStorageService extends AbStorageService {
  public getStorage(key: string) {
    return this.secureStorage.getItem(key);
  }

  public setStorage(key: string, value: any) {
    this.secureStorage.setItem(key, value);
  }

  public clearCache(key: string) {
    this.secureStorage.removeItem(key);
  }

  public clear(): void {
    return this.secureStorage.clear();
  }

}
