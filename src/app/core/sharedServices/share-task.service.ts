import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SharedTaskService {
  rootUrl = 'http://localhost:3000/api';
  constructor(private _http: HttpClient) {}

  getAllTasks() {
    return this._http.get(this.rootUrl + '/getAllTasks');
  }
  filterTasks(term: any) {
    let params = new HttpParams({
      fromObject: {
        content: term,
      },
    });
    return this._http.get(this.rootUrl + '/getAllTasks', {
      params,
    });
  }
}
