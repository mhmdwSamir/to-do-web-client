import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedTaskService } from '../core/sharedServices/share-task.service';

@Component({
  selector: 'app-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.scss'],
})
export class TodoWrapperComponent implements OnInit {
  messageNoTasks: string = '';
  tasksList: any[] = [];
  constructor(private _sharedTaskService: SharedTaskService) {}

  ngOnInit(): void {
    this.getAllTasks();
  }
  getAllTasks() {
    this._sharedTaskService.getAllTasks().subscribe(
      (data) => {
        this.tasksList = data as any;
      },
      (error: HttpErrorResponse) => {
        this.messageNoTasks = error.error;
        this.tasksList = [];
      }
    );
  }
  handleAddingTask(task: any) {
    const newTasksList = [...this.tasksList];
    newTasksList.push(task);
    this.tasksList = newTasksList;
  }
  onDeleteTask() {
    this.getAllTasks();
  }
}
