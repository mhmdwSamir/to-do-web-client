import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss'],
})
export class TodoTaskComponent implements OnInit {
  taskFound: boolean = false;
  @Input() tasks: any;
  @Output() onDeleteTask = new EventEmitter();

  constructor(private _taskService: TaskService) {}

  deleteTask(task: any) {
    this._taskService.deleteTask(task._id).subscribe((data) => {
      this.onDeleteTask.emit();
    });
  }

  ngOnInit(): void {}
}
