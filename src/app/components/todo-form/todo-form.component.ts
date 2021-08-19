import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @ViewChild('inputTask') input!: ElementRef<HTMLInputElement>;
  @Output() onAddTask = new EventEmitter<any>();

  addTaskForm = new FormGroup({
    task: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
  });
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    console.log(this.addTaskForm.controls.errors);
  }

  addNewTask(taskContent: string) {
    if (taskContent && this.addTaskForm.valid) {
      this.taskService
        .addTask({ content: taskContent })
        .subscribe((resp: any) => {
          this.onAddTask.emit(resp.data);
          this.input.nativeElement.value = '';
        });
    }
  }
}
