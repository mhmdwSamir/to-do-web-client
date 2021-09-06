import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import { Tasks } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  rootUrl = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) {}

  addTask(task: any) {
    return this._http.post(this.rootUrl + '/addTask', task);
  }
  deleteTask(id: number) {
    return this._http.delete(this.rootUrl + '/deleteTask/' + `${id}`);
  }
  deleteCompletedTasks() {
    return this._http.delete<Tasks[]>(this.rootUrl + '/deleteAllTasks/');
  }
  getCompletedTasks() {
    let params = new HttpParams({
      fromObject: {
        completed: 'true',
      },
    });

    return this._http.get<Tasks[]>(this.rootUrl + '/getCompletedTasks', {
      params,
    });
  }
  getActiveTasks() {
    let params = new HttpParams({
      fromObject: {
        completed: 'false',
      },
    });
    return this._http.get<Tasks[]>(this.rootUrl + '/getActiveTasks', {
      params,
    });
  }
  signup(userCredintial: any) {
    return this._http.post(this.rootUrl + '/signup', userCredintial);
  }
}
