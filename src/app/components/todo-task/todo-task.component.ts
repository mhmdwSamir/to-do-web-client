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
  TasksMessage!: string;
  constructor(
    private _taskService: TaskService,
    private _SharedTaskService: SharedTaskService
  ) {}

  deleteTask(id: any) {
    this._taskService.deleteTask(id).subscribe((data) => {
      console.log(id);
      this.getAllTasks();
    });
  }
  getAllTasks() {
    return this._SharedTaskService.getAllTasks().subscribe(
      (data) => {
        this.tasks = data;
      },
      ({ error }) => {
        this.TasksMessage = error.text;
      }
    );
  }

  ngOnInit(): void {
    this.getAllTasks();
    // this._SharedTaskService.getAllTasks().subscribe((data) => {
    //   this.tasks = data;
    // });
  }
}
