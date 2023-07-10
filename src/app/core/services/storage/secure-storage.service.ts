import { Injectable } from '@angular/core';
import { ABStorageService } from './ab-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SecureStorageService extends ABStorageService {
  /**
   * Get information from memory based on key
   * @param key -data key in local memory
   * @returns -the value associated with the key in local memory
   */
  public getStorage(key: string) {
    return this.secureStorage.getItem(key);
  }
  /**
   * Information stored in memory based on key
   * @param key -data key in local memory
   * @param value -The value to store in local memory
   */
  public setStorage(key: string, value: any) {
    this.secureStorage.setItem(key, value);
  }
  /**
   * Clear key related information from local memory
   * @param key Key information in local memory
   */
  public clearCache(key: string) {
    this.secureStorage.removeItem(key);
  }
  /**
   * Erase all data from local memory
   * @returns reult void
   */

  public clear(): void {
    return this.secureStorage.clear();
  }
}
