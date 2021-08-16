import { Component, OnInit } from '@angular/core';
import { SharedTaskService } from '../core/sharedServices/share-task.service';

@Component({
  selector: 'app-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.scss'],
})
export class TodoWrapperComponent implements OnInit {
  tasksList: any[] = [];
  constructor(private _sharedTaskService: SharedTaskService) {}

  ngOnInit(): void {
    this._sharedTaskService.getAllTasks().subscribe((data) => {
      this.tasksList = data as any;

      console.log(this.tasksList);
    });
  }

  handleAddingTask(task: any) {
    console.log(task);
    const newTasksList = [...this.tasksList];

    newTasksList.push({ content: task });

    this.tasksList = Array.from(newTasksList);
    console.log('this is the new task list  ' + newTasksList);
  }
}
