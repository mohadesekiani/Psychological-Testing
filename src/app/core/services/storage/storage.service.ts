import { Injectable } from '@angular/core';
import { AbStorageService } from './ab-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService extends AbStorageService {

  public getStorage(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : '';
  }

  public setStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public clearCache(key: string) {
    localStorage.removeItem(key);
  }

  public clear(): void {
    return this.secureStorage.clear();
  }
}