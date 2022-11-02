import { UserListHttpRequest } from './../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import endpoints from '../endpoints';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  constructor(private http: HttpClient) {}

  // User Apis

  getUsers(params?: any): Observable<UserListHttpRequest> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.append(key, params[key]);
      });
    }
    return this.http
      .get<any>(endpoints.users, { params: httpParams })
  }

  getUser(id: number): Observable<User> {
    return this.http
      .get<any>(`${endpoints.users}/${id}`)
      .pipe(map((res) => res.data ?? []));
  }
}
