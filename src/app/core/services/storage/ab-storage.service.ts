import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';
import SecureStorage from 'secure-web-storage';
import { environment } from 'src/environments/environment';


const SECRET_KEY: string = environment.secretKey;

@Injectable({
  providedIn: 'root'
})
export abstract class AbStorageService {
  secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key): any {
      key = CryptoJS.SHA256(key, SECRET_KEY);
      return key.toString();
    },
    // Encrypt the localstorage data
    encrypt: function encrypt(data) {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);
      data = data.toString();
      return data;
    },
    // Decrypt the encrypted data
    decrypt: function decrypt(data) {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);
      data = data.toString(CryptoJS.enc.Utf8);
      return data;
    },
  });

  abstract getStorage(key: string);

  abstract setStorage(key: string, value: any);

  abstract clearCache(key: string);

  abstract clear(): void;

  
  public getCache(key: string | undefined) {
    if (key) {
      const data = this.getStorage(key);

      if (!data || !data.timestamp || new Date() > new Date(data.timestamp))
        return null;
      else return data.value;
    } else return null;
  }

  public setCache(key: string, value: any) {
    const today = new Date();
    today.setHours(today.getHours() + 1);
    this.setStorage(key, { value, timestamp: today });
  }
}
