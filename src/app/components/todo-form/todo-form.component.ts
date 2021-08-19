import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @ViewChild('inputTask') input!: ElementRef<HTMLInputElement>;
  @Output() onAddTask = new EventEmitter<any>();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
  addNewTask(taskContent: string) {
    if (taskContent) {
      this.taskService
        .addTask({ content: taskContent })
        .subscribe((resp: any) => {
          this.onAddTask.emit(resp.data);
          this.input.nativeElement.value = '';
        });
    }
  }
}
