import { Injectable } from '@angular/core';
import { ABStorageService } from './ab-storage.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService extends ABStorageService {
  /**
   * Get value from local memory based on key
   * @param key -the key of the information in the local memory
   * @returns -the value corresponding to the key in local memory or '' if the key does not exist
   */
  public getStorage(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : '';
  }
  /**
   * Store information in local memory based on key
   * @param key -the key of the information in the local memory
   * @param value -the value to be stored in local memory
   */
  public setStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  /**
   * Clear key related information from local memory
   * @param key Key information in local memory
   */
  public clearCache(key: string) {
    localStorage.removeItem(key);
  }
  /**
   * Erase all data from local memory
   * @returns -result void
   */
  public clear(): void {
    return this.secureStorage.clear();
  }
}
