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
  @Output() taskChanges: EventEmitter<any> = new EventEmitter();

  constructor(
    private taskService: TaskService,
    private _SharedTaskService: SharedTaskService
  ) {}

  ngOnInit(): void {}
  addNewTask(taskContent: any) {
    if (taskContent) {
      this.taskService.addTask({ content: taskContent }).subscribe((data) => {
        // this._SharedTaskService.getAllTasks();
        console.log(data);
      });

      this._SharedTaskService.getAllTasks();
      this.input.nativeElement.value = '';
    }
  }
}
