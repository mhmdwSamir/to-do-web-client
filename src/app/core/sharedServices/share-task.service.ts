import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Tasks } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class SharedTaskService {
  rootUrl = 'http://localhost:3000/api';
  token = localStorage.getItem('token');
  constructor(private _http: HttpClient) {}
  getAllTasks(page: any = 1, limit: any = 3, sortBy = 'content') {
    return this._http.get<Tasks[]>(this.rootUrl + '/getAllTasks', {
      params: new HttpParams({
        fromObject: {
          page,
          limit,
          sortBy,
        },
      }),
    });
  }
  filterTasks(term: string) {
    let params = new HttpParams({
      fromObject: {
        content: term,
      },
    });
    return this._http.get<Tasks[]>(this.rootUrl + '/getAllTasks', {
      params,
    });
  }
}
