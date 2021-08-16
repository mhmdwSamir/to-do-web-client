import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { SharedTaskService } from 'src/app/core/sharedServices/share-task.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @ViewChild('inputTask') input!: ElementRef<HTMLInputElement>;
  @Output() onAddTask = new EventEmitter();

  constructor(
    private taskService: TaskService,
    private _SharedTaskService: SharedTaskService
  ) {}

  ngOnInit(): void {}
  addNewTask(taskContent: string) {
    if (taskContent) {
      this.taskService
        .addTask({ content: taskContent })
        .subscribe((data) => {});

      this.input.nativeElement.value = '';
      this.onAddTask.emit(taskContent);
    }
  }
}
