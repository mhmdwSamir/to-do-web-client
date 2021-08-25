import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../core/services/task.service';

import { SharedTaskService } from '../core/sharedServices/share-task.service';

@Component({
  selector: 'app-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.scss'],
})
export class TodoWrapperComponent implements OnInit {
  messageNoTasks: string = '';
  tasksList: any[] = [];
  taskCount: number = 0;
  modelOpen = false;
  constructor(
    private _sharedTaskService: SharedTaskService,
    private _taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.getAllTasks();
  }
  getAllTasks() {
    this._sharedTaskService.getAllTasks().subscribe(
      (data) => {
        this.tasksList = data as any;
        this.taskCount = this.tasksList.length;
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
    this.taskCount = this.tasksList.length;
  }
  onDeleteTask() {
    this.getAllTasks();
  }

  // onGetCompleteTask(completeTasks: any) {
  //   console.log(' completed tasks => ', completeTasks);
  //   this.tasksList = completeTasks;
  // }

  getCompletedTasks() {
    this._taskService.getCompletedTasks().subscribe((completedTasks: any) => {
      this.tasksList = completedTasks;
    });
  }
  getActiveTasks() {
    this._taskService.getActiveTasks().subscribe((activeTasks: any) => {
      this.tasksList = activeTasks;
    });
  }

  togglleModelvisibilty() {
    this.modelOpen = !this.modelOpen;
  }
  clearCompletedTasks() {
    // call end point to delete all completed tasks
    this._taskService.deleteCompletedTasks().subscribe((data) => {
      console.log(data);
      this.getAllTasks();
    });
    this.togglleModelvisibilty();
  }
}
