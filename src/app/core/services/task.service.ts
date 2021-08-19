import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  rootUrl = 'http://localhost:3000/api';

  //  let  params = new HttpParams();
  //  params.append('completed', true);

  constructor(private _http: HttpClient) {}

  addTask(task: any) {
    return this._http.post(this.rootUrl + '/addTask', task);
  }
  deleteTask(id: any) {
    return this._http.delete(this.rootUrl + '/deleteTask/' + `${id}`);
  }
  query = {
    completed: true,
  };

  getCompletedTasks() {
    let params = new HttpParams({
      fromObject: {
        completed: 'true',
      },
    });
    // params = params.append('completed', 'false');
    return this._http.get(this.rootUrl + '/getCompletedTasks', {
      params,
    });
  }
}
