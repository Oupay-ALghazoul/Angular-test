import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

// life Age of the cashed data (mili milliseconds)
const lifeAge = 30000;

@Injectable({
  providedIn: 'root',
})
export class RequestCacheService {
  cache = new Map();

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < Date.now() - lifeAge;
    const expired = isExpired ? 'expired ' : '';
    return cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    const cacheEntry = { url, response, lastRead: Date.now() };
    this.cache.set(url, cacheEntry);

    const expired = Date.now() - lifeAge;
    this.cache.forEach((expiredEntry) => {
      if (expiredEntry.lastRead < expired) {
        this.cache.delete(expiredEntry.url);
      }
    });
  }
}
