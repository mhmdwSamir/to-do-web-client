import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { SharedTaskService } from 'src/app/core/sharedServices/share-task.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss'],
})
export class TodoTaskComponent implements OnInit {
  tasks: any;
  constructor(
    private _taskService: TaskService,
    private _SharedTaskService: SharedTaskService
  ) {}

  ngOnInit(): void {
    this._SharedTaskService.getAllTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
}
