import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  rootUrl = 'http://localhost:3000/api';
  constructor(private _http: HttpClient) {}

  addTask(task: any) {
    return this._http.post(this.rootUrl + '/addTask', task);
  }
  deleteTask(id: any) {
    return this._http.delete(this.rootUrl + '/deleteTask/' + `${id}`);
  }
  // getAllTasks() {
  //   return this._http.get(this.rootUrl + '/getAllTasks');
  // }
}
