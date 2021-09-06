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
  @Output() searchTerm = new EventEmitter();

  addTaskForm = new FormGroup({
    task: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      Validators.pattern(/^[0-9{2}A-Za-z\s\-]+$/),
    ]),
  });
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  addNewTask(taskContent: string) {
    if (taskContent && this.addTaskForm.valid) {
      this.taskService
        .addTask({ content: taskContent })
        .subscribe((response: any) => {
          console.log(response);
          this.onAddTask.emit(response.data);
          this.input.nativeElement.value = '';
        });
    }
  }

  onSearhTerm(term: string) {
    console.log(term);
    this.searchTerm.emit(term);
  }
}
