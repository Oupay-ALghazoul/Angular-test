import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _searchTerm = new BehaviorSubject<string>('');
  private _searchTerm$ = this._searchTerm.asObservable();

  constructor() {}

  getSearchTerm(): Observable<string> {
    return this._searchTerm$;
  }

  setSearchTerm(newValue: string): void {
    return this._searchTerm.next(newValue);
  }
}
